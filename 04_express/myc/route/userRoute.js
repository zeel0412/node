

const express = require("express")
const { addUser, getUser } = require("../controller/usercontroller")

U_router.post("/add",addUser)
U_router.get("/",getUser)

module.exports=U_router