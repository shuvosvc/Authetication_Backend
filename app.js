const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoHandler = require("./routeHandler/todoHandler");
const userHandler = require("./routeHandler/userHandler");
const port = 3000;

const app = express();
dotenv.config();
app.use(express.json());

//database connection with mongoose
mongoose
  .connect("mongodb://localhost/todos", { useNewUrlParser: true })
  .then((res) => {
    // console.log(res);
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

//application routes----------------------------------------------------get start
app.use("/todo", todoHandler);
app.use("/user", userHandler);

//default errorhandler---------------------------------------------------------delet end
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
