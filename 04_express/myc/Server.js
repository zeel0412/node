const express = require("express");
const db=require("./myc/db")
const app = express();

// app.set("view engine", "ejs");
// app.use(express.urlencoded());
// let student = [
//   {
//     id: 1,
//     name: "Zeelu",
//   },
//   {
//     id: 2,
//     name: "Aarti",
//   },
// ];

// app.get("/", (req, res) => {
//   res.render("Form", { student });
// });

// app.post("/insertData", (req,res)=>{
//     const {id,name}=req.body;
//     const obj ={
//         id,name
//     }
//     student.puch(obj)
//     res.redirect("/")
// })
// app.post("/insertData",(req,res)=>{
//     const {id,name}=req.body;
//     const obj={id,name}
//     student.puch(obj)
//     res.redirect("/")
// })

// app.get("/delete",(req,res) => {
//     const id = req.query.id
//     const ans = student.filter ((el,i)=>{
//         return el.id!==id
//     })
//     student =ans 
//     res.redirect("/")
// })

app.listen(8000,()=>{
    console.log("server listen");

})