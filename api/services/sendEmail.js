const resend = require('resend');
const AppointmentModel = require('../models/appointment.model');
const ConsultantModel = require('../models/consultant.model');

const resendClient = new resend.Resend(process.env.RESEND_API_KEY)

async function sendEmail({to,subject,html}) {
    const systemEmail = process.env.SYSTEM_EMAIL;
    try{
        const { data, error } = await resend.emails.send({
            from: systemEmail,
            to,
            subject,
            html,
        });

        if(error){
            console.error('Error sending email:', error);
            return;
        }

    }catch(error){
        console.error('Error sending email:', error);
    }
}

async function sendEmails(emails) {
    const systemEmail = process.env.SYSTEM_EMAIL;
    const data = await resendClient.batch.send(emails);
}

function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

async function sendEmailsToMeetingParticipantsAndAdmin(appointmentId,paymentStatus) {

    const appointmentData = await AppointmentModel.findById(appointmentId)
    .populate('consultant')
    .populate('student');

    const student = appointmentData.student;
    const consultant = appointmentData.consultant;
    const date = formatDate(appointmentData.appointmentDate);

    const systemEmail = process.env.SYSTEM_EMAIL;
    if(paymentStatus === 'success'){
        const studentEmailData = {
            from: `PrepPeer <${systemEmail}>`,
            to: student.email,
            subject: 'Meeting Scheduled',
            html: `<h1>Your meeting with consultant: ${consultant.email} is scheduled on ${date} at ${appointmentData.appointmentTime}.</h1>`
        }
        const consultantEmailData = {
            from: `PrepPeer <${systemEmail}>`,
            to: consultant.email,
            subject: 'Meeting Scheduled',
            html: `<h1>Your meeting with student: ${student.email} is scheduled on ${date} at ${appointmentData.appointmentTime}.</h1>`
        }
        const adminEmailData = {
            from: `PrepPeer <${systemEmail}>`,
            to: 'sr@shahidrizwan.com',
            subject: 'Meeting Scheduled',
            html: `<h1>Meeting between student: ${student.email} and consultant: ${consultant.email} is scheduled on ${date} at ${appointmentData.appointmentTime}.</h1>`
        }
        await sendEmails([studentEmailData, consultantEmailData, adminEmailData]);
        console.log('Emails sent to student, consultant and admin');
    } else if(paymentStatus === 'failed'){
        const studentEmailData = {
            from: `PrepPeer <${systemEmail}>`,
            to: student.email,
            subject: 'Meeting Booking Failed',
            html: `<h1>Your meeting booking with consultant: ${consultant.email} failed. Please try again.</h1>`
        }
        const adminEmailData = {
            from: `PrepPeer <${systemEmail}>`,
            to: 'sr@shahidrizwan.com',
            subject: 'Failed Meeting Booking',
            html: `<h1>Meeting between student: ${student.email} and consultant: ${consultant.email} failed. Please follow up.</h1>`
        }
        await sendEmails([studentEmailData, adminEmailData]);
        console.log('Emails sent to student and admin');
    }
}

async function sendMeetingConfirmationEmailToAdminAndStudent(studentEmail, consultantId){
    const consultant = await ConsultantModel.findById(consultantId);
    const systemEmail = process.env.SYSTEM_EMAIL;
    const studentEmailData = {
        from: `PrepPeer <${systemEmail}>`,
        to: studentEmail,
        subject: `Meeting with ${consultant.name} confirmed`,
        html: `
        <div>
        <h3>Welcome to PrepPeer!</h3>
        We have received your submission and will be in touch soon via email to coordinate the timing of your meeting with the mentor. We are excited to work with you!
        </div>`
    }
    const adminEmailData = {
        from: `PrepPeer <${systemEmail}>`,
        to: 'sr@shahidrizwan.com',
        subject: 'Failed Meeting Booking',
        html: `<h3>Meeting between student: ${studentEmail} and consultant: ${consultant.email} booked. Please follow up.</h3>`
    }
    await sendEmails([studentEmailData, adminEmailData]);
    console.log('Meeting confirmation mails sent to student and admin');
}

module.exports = { sendEmail, sendEmails, sendEmailsToMeetingParticipantsAndAdmin, sendMeetingConfirmationEmailToAdminAndStudent }