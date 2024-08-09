const { z } = require('zod');

const meetingPayloadSchema = z.object({
  consultantId: z.string().min(1,"Consultant ID is required"),
  firstName: z.string().min(1,"First name is required"),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1,"Phone number is required")
});

module.exports = {
  meetingPayloadSchema
};