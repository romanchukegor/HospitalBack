const Router = require("express").Router;
const AppointmentsController = require("../controllers/appointment-controller");

const router = new Router();

router.get("/appointments", AppointmentsController.getAppointments);

module.exports = router;
