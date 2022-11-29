const AppointmentsService = require("../service/appointments-service");

class AppointmentsController {
  async getAppointments(req, res, next) {
    try {
      const appointments = await AppointmentsService.getAppointments();
      res.send({ appointments });
    } catch (error) {
      next(error);
    }
  }
  async createAppointment(req, res, next) {
    try {
      const newAppointment = await AppointmentsService.createAppointment(req);
      res.send({ newAppointment });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsController();
