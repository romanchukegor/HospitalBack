const AppointmentsModel = require("../models/appointment-model");

class AppointmentsService {
  async getAppointments() {
    const allAppointments = await AppointmentsModel.find();
    return allAppointments;
  }
}

module.exports = new AppointmentsService();
