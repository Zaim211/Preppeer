const AppointmentModel = require("../models/appointment.model");

async function createAppointment({
    paymentIntentId,
    appointmentDate,
    appointmentTime,
    duration,
    price,
    consultantId,
    studentId,
}) {

  const newAppointment = new AppointmentModel({
    paymentIntentId,
    appointmentDate,
    appointmentTime,
    duration, // Duration in minutes
    price, // Price in USD
    consultant: consultantId,
    student: studentId,
  });

  try {
    const savedAppointment = await newAppointment.save();
    console.log('Appointment created successfully:', savedAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
  }
}

module.exports = { createAppointment };