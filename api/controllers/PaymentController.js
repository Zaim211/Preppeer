

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { createAppointment } = require("../services/createAppointment");

class PaymentController {
    static async createPaymentIntent(req,res){
        const {amount,currency,appointmentDate,appointmentTime,duration,studentId,consultantId} = req.body;
        // Create a PaymentIntent with the order amount and currency
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency,
                automatic_payment_methods: {
                    enabled: true
                }
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
}

module.exports = PaymentController