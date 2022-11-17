const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString("ru"),
    required: true
  },
  сomplaints: {
    type: String,
    required: true,
  },
});

module.exports = model("Appointment", AppointmentSchema);
