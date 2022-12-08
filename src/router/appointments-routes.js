const Router = require("express").Router;
const AppointmentsController = require("../controllers/appointment-controller");
const {
  appointmentValidator,
} = require("../middlewares/appointments-validator");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.get(
  "/appointments",
  authMiddleware,
  AppointmentsController.getAppointments
);
router.post(
  "/appointments",
  authMiddleware,
  appointmentValidator,
  AppointmentsController.createAppointment
);
router.patch(
  "/appointments/:_id/",
  appointmentValidator,
  AppointmentsController.changeAppointment
);
router.delete("/appointments/:_id/", AppointmentsController.deleteAppointment);

module.exports = router;
