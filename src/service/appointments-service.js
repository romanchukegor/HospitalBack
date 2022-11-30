const Appointment = require("../models/appointment-model");

class AppointmentsService {
  async getAppointments(userId) {
    const userAppointments = await Appointment.find({ userId });

    return userAppointments;
  }
  async createAppointment(body, userId) {
    try {
      const { name, doctor, date, complaint } = body;
      const appointment = new Appointment({
        name,
        doctor,
        date,
        complaint,
        userId,
      });
      const result = await appointment.save();
      return result;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsService();
