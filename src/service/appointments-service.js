const Appointment = require("../models/appointment-model");

class AppointmentsService {
  async getAppointments(userId) {
    const appointments = await Appointment.find({ userId });

    return appointments;
  }
  async createAppointment(name, doctor, date, complaint, userId) {
    try {
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
