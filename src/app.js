const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const { errorHandle, notFound } = require("./middleware/errorMiddleware");

const app = express();
//env
dotenv.config();

const logger = (req, res, next) => {
  next();
};

app.use(logger);
//dbConnect
dbConnect();

//middleware
app.use(express.json());
//routes
app.use("/api/users", userRoute); //middleware routes

//Error
app.use(notFound);
app.use(errorHandle);

//income
//expenses
module.exports = app;
