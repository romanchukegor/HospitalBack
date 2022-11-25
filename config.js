require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT || 5000;
const ACCESS_TOKEN = process.env.JWT_ACCESS_SECRET;
const REFRESH_TOKEN = process.env.JWT_REFRESH_SECRET;
const corsOptions = {
  credentials: true,
  origin: process.env.ORIGIN_URL,
}

module.exports = {
  URL,
  PORT,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  corsOptions,
};
