const AppointmentModel = require("../models/appointment.model");


async function updateAppointmentPaymentStatus(paymentIntent, status) {
    if (!paymentIntent || !status) {
        throw new Error('Payment intent and status are required.');
    }

    try {
        const appointment = await AppointmentModel.findOne({ paymentIntentId: paymentIntent });
        if (!appointment) {
            throw new Error('Appointment not found.');
        }

        appointment.paymentStatus = status;
        const appointmentData = await appointment.save();
        console.log(`Appointment payment status for intent ${paymentIntent} updated to: ${status}`);
        return appointmentData._id;
    } catch (error) {
        console.error('Error updating appointment payment status:', error);
        throw new Error('Failed to update appointment payment status.');
    }
}

module.exports = {updateAppointmentPaymentStatus};