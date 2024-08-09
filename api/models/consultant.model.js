const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  dayOfWeek: { type: Number, required: true },
  workStart: { type: String, required: true },
  workEnd: { type: String, required: true },
});

const consultantSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  major: { type: [String] },
  country: { type: String },
  price: { type: [String] },
  language: { type: [String] },
  universityCountry: { type: String },
  category: { type: [String] },
  subcategories: { type: [String] },
  profilePicture: { type: [String] },
  admission: { type: String },
  bio: { type: String },
  moreInfo: { type: String },
  sessions: { type: [String] },
  schedules: { type: [scheduleSchema] }, // Add schedules field
}, { timestamps: true });

const ConsultantModel = mongoose.model('Consultant', consultantSchema);

module.exports = ConsultantModel;
