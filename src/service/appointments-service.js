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
  async changeAppointment(name, doctor, date, complaint, _id) {
    try {
      const appointment = await Appointment.findOneAndUpdate(
        { _id },
        { $set: { name, doctor, date, complaint } },
        { new: true }
      );

      return appointment;
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointment(_id) {
    try {
      const appointment = await Appointment.deleteOne({ _id });
      
      return appointment;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsService();
