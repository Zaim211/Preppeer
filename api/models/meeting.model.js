const mongoose = require('mongoose');

const studentMeetingSchema = new mongoose.Schema({
//   paymentIntentId: { type: String, required: true },
//   appointmentDate: { type: Date, required: true },
//   appointmentTime: { type: String, required: true },
//   duration: { type: Number, required: true },
//   paymentStatus: { type: String,enum: ['pending', 'success', 'failed', 'refunded'], default: 'pending' },
//   price: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    consultantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true },
}, { timestamps: true });

const StudentMeetingModel = mongoose.model('StudentMeeting', studentMeetingSchema);

module.exports = StudentMeetingModel;
