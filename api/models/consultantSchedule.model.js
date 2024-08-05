
const mongoose = require('mongoose');

const consultantScheduleSchema = new mongoose.Schema({
    dayOfWeek: { type: Number, required: true, min: 0, max: 6 },
    workStart: { type: String, required: true },
    workEnd: { type: String, required: true },
    consultantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true },
});

module.exports = mongoose.model('ConsultantSchedule', consultantScheduleSchema);