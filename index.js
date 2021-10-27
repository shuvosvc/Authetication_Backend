const express = require("express");
const adminRouter = require("./adminRouter");
const app = express();
const port = 3000;
app.use("/admin", adminRouter);
app.use(express.json());

// let x = { name: "shovo", age: 5, height: 5 };
// let y = { name: "shovo", age: 3, height: 5, weight: 54 };

// fun(x,y)
// console.log(x,y);

const arr = [
  { id: 1, name: "Shovo" },
  { id: 2, name: "ontor" },
  { id: 3, name: "arif" },
];

//----------------------------------------------------get start
app.get("/", (req, res) => {
  res.json(arr);
});
// app.get("/:id", (req, res) => {
//   // console.log(req.params);
//   let temp = parseInt(req.params.id, 10);
//   let obj = arr.find((i) => i.id === temp);
//   // console.log(obj);
//   if (obj === undefined) {
//     res.send("obj does not exist");
//   } else {
//     res.json(obj);
//   }
// });
//-------------------------------------------------------get end

//---------------------------------------------------------------post start

// app.post("/", (req, res) => {
//   if (req.body?.id && req.body?.name) {
//     arr.map((i) => {
//       if (i.id != req.body.id) {
//         console.log(req.body);
//         arr.push({ id: req.body.id, name: req.body.name });
//         res.send("new object is created");
//       }
//       res.send("object already exist");
//     });
//   }
// });

app.post("/", (req, res) => {
  let x = typeof req.body.id;
  let y = typeof req.body.name;
  // let m = Object.values(arr).some((i) => i == req.body.id);

  if (x == "number" && y == "string") {
    let bulean = arr.some((i) => i.id === req.body.id);
    if (bulean === false) {
      // console.log(bulean);
      arr.push({ id: req.body.id, name: req.body.name });
      res.send("new object is created");
      // console.log(arr);
    } else {
      // console.log(bulean);
      res.send(" object already exist");
    }
  } else {
    res.send(" object is unaceptable");
  }
});
//--------------------------------------------------------post end

//--------------------------------------------put start
// app.put("/:id", (req, res) => {
//   let temp_id = parseInt(req.params.id, 10);
//   let temp_obj = arr.find((i) => i.id === temp_id);
//   if (temp_obj === undefined) {
//     res.send("obj does not exist");
//   } else {
//     let arr1 = Object.keys(temp_obj);
//     let arr2 = Object.keys(req.body);
//     console.log(arr1, arr2);
//     arr2.map((it1) => {
//       let bol = arr1.some((it2) => it2 === it1);

//       arr.map((i) => {
//         if (bol === true) {
//           if (i === temp_obj) {
//             i[it1] = req.body[it1];
//             console.log(it1);
//             res.send("obj property updated");
//           }
//         } else {
//           temp_obj[it1] = null;
//           res.send("obj property assigned null");
//         }
//       });
//     });
//     console.log(temp_obj, req.body);
//   }
// });

// app.put("/:id", (req, res) => {
//   let temp = parseInt(req.params.id, 10);
//   let bulean = arr.some((i) => i.id === temp);

//   if (bulean === true) {
//     arr.map((i) => {
//       if (i.id === temp && req.body?.name) {

//         i.name=req.body.name
//         res.send("obj updated");
//       }
//     });
//   }
//   res.send("obj is not acceptable");
// });

app.put("/:id", (req, res) => {
  let temp = parseInt(req.params.id, 10);
  let bulean = arr.some((i) => i.id === temp);
  let temp_arr = Object.keys(req.body);
  if (bulean === true) {
    temp_arr.map((m) => {
      arr.map((n) => {
        let x = n.hasOwnProperty(m);
        if (n.id === temp) {
          if (x === true) {
            n[m] = req.body[m];
            res.send("property found1");
          } else {
            n[m] = null;
            res.send("property nulled2");
          }
        }
        if (x === false) {
          n[m] = null;
          res.send("property nulled3");
        }
      });
    });
  } else {
    res.send("object is not found");
  }
});

//-----------------------------------------------put end

//-----------------------------------------------delet start
app.delete("/:id", (req, res) => {
  // delete arr[req.params.id].price
  let temp = parseInt(req.params.id, 10);
  let num = temp - 1;
  let bulean = arr.some((i) => i.id === temp);
  if (bulean === true) {
    arr.splice(num, 1);
    res.send("Delete Success");
  } else {
    res.send("Obj does not exist");
  }
});
//---------------------------------------------------------delet end

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
