const express = require('express'),
  router = express.Router(),
  usersRoutes = require('./users-routes')

router.use(usersRoutes)

module.exports = router
