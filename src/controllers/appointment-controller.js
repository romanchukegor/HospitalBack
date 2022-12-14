const AppointmentsService = require("../service/appointments-service");

class AppointmentsController {
  async getAppointments(req, res, next) {
    try {
      const appointments = await AppointmentsService.getAppointmentsById(
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
      const userId = req.user.id;

      const newAppointment = await AppointmentsService.createAppointment({
        userId,
        name,
        doctor,
        date,
        complaint,
      });

      res.status(200).send(newAppointment);
    } catch (error) {
      next(error);
    }
  }

  async changeAppointment(req, res, next) {
    try {
      const { name, doctor, date, complaint } = req.body;
      const id = req.params._id;

      const updatedAppointment =
        await AppointmentsService.changeAppointmentById(id, {
          name,
          doctor,
          date,
          complaint,
        });

      res.status(200).send(updatedAppointment);
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointment(req, res, next) {
    try {
      const _id = req.params._id;

      const deletedInfo = await AppointmentsService.deleteAppointmentById({
        _id,
      });

      res.status(200).send(deletedInfo);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsController();
