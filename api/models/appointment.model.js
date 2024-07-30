const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  paymentIntentId: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  duration: { type: Number, required: true },
  paymentStatus: { type: String,enum: ['pending', 'success', 'failed'], default: 'pending' },
  price: { type: Number, required: true },
  consultant: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
}, { timestamps: true });

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;
