const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  db: process.env.BONS_DB_URI,
};
