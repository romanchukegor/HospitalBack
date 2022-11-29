const Appointment = require("../models/appointment-model");

class AppointmentsService {
  async getAppointments() {
    const allAppointments = await Appointment.find();
    return allAppointments;
  }
  async createAppointment(req) {
    try {
      const { name, doctor, date, complaint } = req.body;
      const appointment = new Appointment({
        name,
        doctor,
        date,
        complaint,
      });
      const result = await appointment.save();
      return result;
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AppointmentsService();
