const AppointmentsService = require("../service/appointments-service");

class AppointmentsController {
  async getAppointments(req, res, next) {
    try {
      const appointments = await AppointmentsService.getAppointments(
        req.user.id
      );

      res.status(200).send(appointments);
    } catch (error) {
      next(error);
    }
  }

  async createAppointment(req, res, next) {
    try {
      const { name, doctor, date, complaint } = req.body;

      const newAppointment = await AppointmentsService.createAppointment(
        name,
        doctor,
        date,
        complaint,
        req.user.id
      );

      res.status(200).send(newAppointment);
    } catch (error) {
      next(error);
    }
  }

  async changeAppointment(req, res, next) {
    try {
      const { name, doctor, date, complaint } = req.body;

      const updatedAppointment = await AppointmentsService.changeAppointment(
        name,
        doctor,
        date,
        complaint,
        req.params._id
      );

      res.status(200).send(updatedAppointment);
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointment(req, res, next) {
    try {
      const _id = req.params._id;

      const deletedAppointment = await AppointmentsService.deleteAppointment({
        _id,
      });

      res.status(200).send(deletedAppointment);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsController();
