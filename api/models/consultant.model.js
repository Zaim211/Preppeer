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
  bio: { type: String },


}, { timestamps: true });

const ConsultantModel = mongoose.model('Consultant', consultantSchema);

module.exports = ConsultantModel;
