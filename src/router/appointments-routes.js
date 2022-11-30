const Router = require("express").Router;
const AppointmentsController = require("../controllers/appointment-controller");
const {
  createAppointmentValidator,
} = require("../middlewares/appointments-validator");
const authMiddleware = require("../middlewares/auth-middleware")

const router = new Router();

router.get("/appointments", authMiddleware, AppointmentsController.getAppointments);
router.post(
  "/appointments",
  authMiddleware,
  createAppointmentValidator,
  AppointmentsController.createAppointment
);

module.exports = router;
