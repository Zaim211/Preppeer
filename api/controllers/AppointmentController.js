const AppointmentModel = require("../models/appointment.model");
const ConsultantScheduleModel = require("../models/consultantSchedule.model");
const mongoose = require('mongoose');
const moment = require('moment');

class AppointmentController {
    static async getAvailableSlotsForConsultant(req, res) {
        const { id } = req.params;
        const { year, month } = req.query;

        if (!year || !month) {
            return res.status(400).json({ error: 'Year and month are required' });
        }

        const paddedMonth = month.padStart(2, '0');
        const startDate = moment(`${year}-${paddedMonth}-01`, 'YYYY-MM-DD').startOf('month');
        const endDate = moment(startDate).endOf('month');

        try {
            // Fetch instructor's working hours for all days
            const workingHours = await ConsultantScheduleModel.find({ consultantId: id });

            if (workingHours.length === 0) {
            return res.status(404).json({ error: 'Consultant schedule not found' });
            }

            const workSchedule = workingHours.reduce((acc, schedule) => {
            acc[schedule.dayOfWeek] = { work_start: schedule.workStart, work_end: schedule.workEnd };
            return acc;
            }, {});

            // Fetch all bookings for the instructor in the given month
            const appointments = await AppointmentModel.find({
            consultant: id,
            appointmentDate: { $gte: startDate.toDate(), $lte: endDate.toDate() },
            paymentStatus: { $eq: 'success' }
            });

            // Generate available timeslots
            const availableSlots = [];
            let currentDate = moment(startDate);

            while (currentDate <= endDate) {
            const dayOfWeek = currentDate.day();
            const daySchedule = workSchedule[dayOfWeek];

            if (daySchedule) {
                let slotStart = moment(currentDate).set({
                hour: daySchedule.work_start.split(':')[0],
                minute: daySchedule.work_start.split(':')[1],
                second: 0
                });
                const dayEnd = moment(currentDate).set({
                hour: daySchedule.work_end.split(':')[0],
                minute: daySchedule.work_end.split(':')[1],
                second: 0
                });

                while (slotStart < dayEnd) {
                const slotEnd = moment(slotStart).add(30, 'minutes');
                const isBooked = appointments.some(booking => 
                    booking.appointmentDate.getTime() === currentDate.toDate().getTime() &&
                    moment(booking.startTime, 'HH:mm').isBetween(slotStart, slotEnd, null, '[)')
                );

                if (!isBooked) {
                    availableSlots.push({
                    date: currentDate.format('YYYY-MM-DD'),
                    start_time: slotStart.format('HH:mm'),
                    end_time: slotEnd.format('HH:mm')
                    });
                }

                slotStart = slotEnd;
                }
            }
            currentDate.add(1, 'day');
            }

            res.json(availableSlots);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch available timeslots' });
        }

    }

    static async createConsultantSchedule(req, res) {
        const { id } = req.params;
        const { schedules } = req.body;

        if (!Array.isArray(schedules) || schedules.length === 0) {
            return res.status(400).json({ error: 'Invalid schedule data' });
        }

        try {
            const session = await mongoose.startSession();
            session.startTransaction();
            try {
            // Remove existing schedules for this instructor
            await ConsultantScheduleModel.deleteMany({ consultantId: id }, { session });

            // Insert new schedules
            const schedulePromises = schedules.map(schedule => {
                const { dayOfWeek, workStart, workEnd } = schedule;
                
                if (typeof dayOfWeek !== 'number' || dayOfWeek < 0 || dayOfWeek > 6) {
                throw new Error('Invalid day of week');
                }

                if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(workStart) || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(workEnd)) {
                throw new Error('Invalid time format');
                }

                return ConsultantScheduleModel.create([{
                consultantId: id,
                dayOfWeek,
                workStart,
                workEnd
                }], { session });
            });

            await Promise.all(schedulePromises);

            await session.commitTransaction();
            session.endSession();

            res.status(201).json({ message: 'Instructor schedule updated successfully' });
            } catch (error) {
                await session.abortTransaction();
                session.endSession();
            throw error;
            }
        } catch (error) {
            console.error('Error updating instructor schedule:', error);
            res.status(500).json({ error: 'Failed to update instructor schedule', details: error.message });
        }

    }
}

module.exports = AppointmentController;