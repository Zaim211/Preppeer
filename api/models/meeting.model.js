// const mongoose = require('mongoose');

// const studentMeetingSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: false },
//     currentGrade: { type: String, required: false },
//     language: { type: String, required: false },
//     questions: { type: String, required: false },
//     consultantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true },
// }, { timestamps: true });

// const StudentMeetingModel = mongoose.model('StudentMeeting', studentMeetingSchema);

// module.exports = StudentMeetingModel;


const mongoose = require('mongoose');

const studentMeetingSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    currentGrade: { type: String, required: false },
    language: { type: String, required: false },
    questions: { type: String, required: false },
    consultantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant', required: true },
    packageChoice: { type: String, enum: ['30 mins', '1 hour'] }  // Add this line
}, { timestamps: true });

const StudentMeetingModel = mongoose.model('StudentMeeting', studentMeetingSchema);

module.exports = StudentMeetingModel;
