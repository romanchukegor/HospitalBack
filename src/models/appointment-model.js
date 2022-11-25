const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  
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
    required: true,
  },

  сomplaint: {
    type: String,
    required: true,
  },
});

module.exports = model("Appointments", AppointmentSchema);
