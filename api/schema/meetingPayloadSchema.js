const { z } = require('zod');

const meetingPayloadSchema = z.object({
  consultantId: z.string().min(1,"Consultant ID is required"),
  fullName: z.string().min(1,"Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  currentGrade: z.string().min(1,'Current grade is required'),
  language: z.string().optional(),
  questions: z.string().min(1,'Current grade is required')
});

module.exports = {
  meetingPayloadSchema
};