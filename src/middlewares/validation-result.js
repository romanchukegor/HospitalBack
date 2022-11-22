const {validationResult} = require("express-validator")

module.exports.validate = (req, res, next) => {
    const error = validationResult(req).array();
  
    if (error.length) {
      return res.json({ error: error[0].msg });
    }
  
    next();
  };