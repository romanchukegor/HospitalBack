const express = require("express");
const router = express.Router();
const usersRoutes = require("./users-routes");
const appointmentsRoutes = require("./appointments-routes");

router.use(usersRoutes);
router.use(appointmentsRoutes);

module.exports = router;
