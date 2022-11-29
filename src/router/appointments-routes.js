const Router = require("express").Router;
const AppointmentsController = require("../controllers/appointment-controller");
const {
  createAppointmentValidator,
} = require("../middlewares/appointments-validator");

const router = new Router();

router.get("/appointments", AppointmentsController.getAppointments);
router.post(
  "/appointments",
  createAppointmentValidator,
  AppointmentsController.createAppointment
);

module.exports = router;
