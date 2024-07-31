const AppointmentModel = require("../models/appointment.model");


async function updateAppointmentPaymentStatus(paymentIntent,status){
    const appointment = await AppointmentModel.findOne({paymentIntentId: paymentIntent});
    appointment.paymentStatus = status;
    await appointment.save();
}

module.exports = {updateAppointmentPaymentStatus};