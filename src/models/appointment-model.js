const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema({
  name: String,
  doctor: String,
  date: {
    type: String,
    default: new Date().toLocaleDateString("ru"),
  },
  сomplaints: String,
});

module.exports = model("Appointment", AppointmentSchema);
