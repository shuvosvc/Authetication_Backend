const express = require("express");
const adminRouter = express.Router();

// adminRouter.param((param, option) => (req, res, next, val) => {
//   if (val === option) {
//     next();
//   } else {
//     res.send("EROR");
//     console.log(val, "---------------------------------");
//     console.log(option);
//   }
// });

// adminRouter.param("user", "12");
// adminRouter.get("/:user", (req, res) => {
//   res.send("Hello user");
// });

// adminRouter.get("/", (req, res) => {
//   res.send("Hello ");
// });

adminRouter
  .route("/user")
  .all((req, res, next) => {
    console.log("i am loging somthing");
    next();
  })

  .get((req, res) => {
    res.send("Get");
  })

  .post((req, res) => {
    res.send("post");
  })
  .put((req, res) => {
    res.send("put");
  })
  .delete((req, res) => {
    res.send("delet");
  });

module.exports = adminRouter;
