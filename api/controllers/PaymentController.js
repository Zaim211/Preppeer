const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { createAppointment } = require("../services/createAppointment");
const { sendEmailsToMeetingParticipantsAndAdmin } = require("../services/sendEmail");
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
        const sig = req.headers['stripe-signature'];
          let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
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
            console.log('---Charge failed for payment intent: ',chargeFailed.payment_intent);
            await updateAppointmentPaymentStatus(chargeFailed.payment_intent,'failed');
            // Send emails to the student and admin to notify about the failed payment
            await sendEmailsToMeetingParticipantsAndAdmin(appointmentId,'failed');
            break;
            case 'charge.refunded':
            const chargeRefunded = event.data.object;
            console.log('---Charge refunded for payment intent: ',chargeRefunded.payment_intent);
            await updateAppointmentPaymentStatus(chargeRefunded.payment_intent,'refunded');
            break;
            case 'charge.succeeded':
                const chargeSucceeded = event.data.object;
                console.log('---Charge succeeded for payment intent: ', chargeSucceeded.payment_intent);
            const appointmentId = await updateAppointmentPaymentStatus(chargeSucceeded.payment_intent,'success');
            // Send emails to the student, consultant and the admin team
            await sendEmailsToMeetingParticipantsAndAdmin(appointmentId,'success');
            break;
            default:
            console.log(`Unhandled event type ${event.type}`);
        }
        res.send({received: true}).end();
    }
}

module.exports = PaymentController