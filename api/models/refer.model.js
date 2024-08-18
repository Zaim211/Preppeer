const mongoose = require('mongoose');

const referSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: {type : String, required: true},
  addressEmail: { type: String, required: true },
  theirName: { type: String, required: true },
  theirAddressEmail: { type: String, required: true },
  selectRole: { type: [String], required: true },
}, { timestamps: true });

const Refer = mongoose.model('Refer', referSchema);

module.exports = Refer;
