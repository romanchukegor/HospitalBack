require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT || 5000;
const ACCESS = process.env.JWT_ACCESS_SECRET
const REFRESH = process.env.JWT_REFRESH_SECRET

module.exports = {
  URL,
  PORT,
  ACCESS,
  REFRESH,
};
