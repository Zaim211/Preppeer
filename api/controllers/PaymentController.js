

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { createAppointment } = require("../services/createAppointment");
const { updateAppointmentPaymentStatus } = require("../services/updateAppointmentPaymentStatus");

class PaymentController {
    static async createPaymentIntent(req,res){
        const {amount,currency,appointmentDate,appointmentTime,duration,studentId,consultantId} = req.body;
        // Create a PaymentIntent with the order amount and currency
        try{
            const student = await stripe.customers.create({
                metadata: {
                    studentId,
                    consultantId
                },
            })
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency,
                automatic_payment_methods: {
                    enabled: true
                },
                customer: student.id
            });
            await createAppointment({
                paymentIntentId: paymentIntent.id,
                appointmentDate,
                appointmentTime,
                duration,
                price: amount,
                consultantId,
                studentId,
            })
            res.status(201).json({
                clientSecret: paymentIntent.client_secret
            });
        } catch (error){
            console.error('Error creating payment intent:', error);
            res.status(500).send({
                error: error.message
            });
        }
    }

    static async receivePaymentWebhook(req,res){
        console.log('Webhook received');
        const webhookSecret = "whsec_97232d13943d090d93fe49b1d19b0e41506e3742505260f288e633507596595b"
        const sig = req.headers['stripe-signature'];
          let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
            console.log('Webhook verified');
        } catch (err) {
            console.error('Webhook verification failed:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
          // Handle the event
        switch (event.type) {
            case 'charge.failed':
            const chargeFailed = event.data.object;
            console.log('charge failed!!!');
            await updateAppointmentPaymentStatus(chargeFailed.payment_intent,'failed');
            console.log('Payment status updated to failed for payment intent:', chargeFailed.payment_intent);
            break;
            case 'charge.refunded':
            const chargeRefunded = event.data.object;
            console.log('charge refunded!!!');
            await updateAppointmentPaymentStatus(chargeRefunded.payment_intent,'refunded');
            console.log('Payment status updated to refunded for payment intent:', chargeRefunded.payment_intent);
            break;
            case 'charge.succeeded':
            console.log('charge succeeded!!!');
            const chargeSucceeded = event.data.object;
            await updateAppointmentPaymentStatus(chargeSucceeded.payment_intent,'success');
            console.log('Payment status updated to success for payment intent:', chargeSucceeded.payment_intent);
            // Send emails to the student, consultant and the admin team
            break;
            default:
            console.log(`Unhandled event type ${event.type}`);
        }
        res.send({received: true}).end();
    }
}

module.exports = PaymentController