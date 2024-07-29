const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type:String, required:true},
  major: { type: [String] },
  country: { type: String },
  price: {type: [String]},
  language: { type: [String] },
  universityCountry: { type: String },
  category: { type: [String] },
  subcategories: { type: [String] },
  profilePicture: { type: [String] },
  admission: { type: String },
  bio: { type: String },
  availabilityStart: { type: Date },
  availabilityEnd: { type: Date },
  moreInfo: { type: String },
}, { timestamps: true });

const ConsultantModel = mongoose.model('Consultant', consultantSchema);

module.exports = ConsultantModel;
