const Appointment = require("../models/appointment-model");

class AppointmentsService {
  async getAppointmentsById(userId) {
    const appointments = await Appointment.find({ userId });

    return appointments;
  }

  async createAppointment(appointmentInfo) {
    try {
      const appointment = new Appointment({
        ...appointmentInfo,
      });
      const result = await appointment.save();

      return result;
    } catch (error) {
      next(error);
    }
  }

  async changeAppointmentById(_id, appointmentInfo) {
    try {
      const updatedAppointment = await Appointment.findOneAndUpdate(
        { _id },
        { $set: { ...appointmentInfo } },
        { new: true }
      );

      return updatedAppointment;
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointmentById(_id) {
    try {
      const deletedInfo = await Appointment.deleteOne({ _id });

      return deletedInfo;
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsService();
