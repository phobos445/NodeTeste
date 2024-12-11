const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
const ejs = require("ejs");

dotenv.config();
connectToDatabase();

require("./modules/express");
