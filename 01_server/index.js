const express = require("express")

const app = express()
const port = 8000

app.get("/",(req, res)=>{
    res.json({msg: "Server is running"})
})

app.get("/test",(req,res)=>{
    res.send("<h1>The server is running</h1>")
})

app.listen(port,()=>{
    console.log(`Server is start http://localhost:${port}/`)
})