const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type:String,  required:true},
}, { timestamps: true });

const StudentModel = mongoose.model('Student', studentSchema);

module.exports = StudentModel;
