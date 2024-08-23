
const Consultant = require("../models/consultant.model");

require("dotenv").config();

const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");
const bcryptSalt = bcrypt.genSaltSync(10);

class AuthController {

static async registerConsultant(req, res) {
  const {
    name,
    email,
    password,
    major,
    price,
    country,
    language,
    universityCountry,
    addedPhotos,
    category,
    subcategories,
    bio,
  
  } = req.body;

  try {
    const consultant = await Consultant.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      country,
      price,
      major,
      language,
      universityCountry,
      profilePicture: addedPhotos,
      category,
      subcategories,
      bio,

    });
    console.log("consultant", consultant);
    res.status(201).json({ consultant });
  } catch (error) {

    console.error('Error registering consultant:', error);
    res.status(500).json({ error: 'Failed to register consultant', details: error.message });
  }
}

  static async getConsultantById(req, res) {
    const { id } = req.params;
    try {
      const consultant = await Consultant.findById(id);
      res.json({ consultant });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getAllConsultants(req, res) {
    try {
      const consultants = await Consultant.find();
      res.json({ consultants });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }


}

module.exports = AuthController;
