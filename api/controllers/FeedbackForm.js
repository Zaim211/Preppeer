const Feedback = require("../models/feedback.model");

class FeedbackForm {
  static async createFeedback(req, res) {
    const { firstName, lastName, email, whatsapp, referral, universities } = req.body;

    if (!firstName || !lastName || !email || !whatsapp || !referral || !universities) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
      const feedback = await Feedback.create({
        firstName,
        lastName,
        email,
        whatsapp,
        referral,
        universities,
      });
      console.log("Feedback: ", feedback);
      res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
      console.error("Error creating feedback:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = FeedbackForm;
