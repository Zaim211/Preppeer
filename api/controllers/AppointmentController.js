const mongoose = require('mongoose');
const StudentMeetingModel = require("../models/meeting.model");
const { meetingPayloadSchema } = require("../schema/meetingPayloadSchema");
const { sendMeetingConfirmationEmailToAdminAndStudent } = require("../services/sendEmail");

class AppointmentController {
   

  static async createMeetingBooking(req, res) {
    const payload = req.body;

    // Validate the input data
    try {
      meetingPayloadSchema.parse(payload);  // Ensure meetingPayloadSchema includes validation for packageChoice
    } catch (validationError) {
      return res.status(400).json({ message: validationError.errors });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      console.log('Meeting data: ', payload);

      // Create the meeting booking
      await StudentMeetingModel.create([payload], { session });

      // Send confirmation email
      await sendMeetingConfirmationEmailToAdminAndStudent(payload);

      await session.commitTransaction();
      res.status(201).json({ message: 'Meeting booked successfully' });
    } catch (error) {
      await session.abortTransaction();
      console.error("Error creating meeting:", error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      session.endSession();
    }
}
}

module.exports = AppointmentController;