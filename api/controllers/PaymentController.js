

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class PaymentController {
    static async createPaymentIntent(req,res){
        const {amount,currency} = req.body;
        // Create a PaymentIntent with the order amount and currency
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency,
                automatic_payment_methods: {
                    enabled: true
                }
            });
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