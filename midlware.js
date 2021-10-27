const express = require("express");

const midlware = express();

const adminRouter = express.Router();

const logger = (res, req, next) => {
  console.log(`${new Date(Date.now()).toDateString()} `);
  throw new Error("This is an error");
};

adminRouter.use(logger);
adminRouter.get("/dashboard", (req, res) => {
  res.send("DashBoard");
});

midlware.use("/admin", adminRouter);

midlware.get("/about", (req, res) => {
  res.send("about");
});
const errorMidlware = (err, req, res, next) => {
  console.log(err.message);

  res.status(500).send("There was a server side error!");
};
adminRouter.use(errorMidlware);

midlware.listen(5000, () => {
  console.log("listening on port 5000");
});
