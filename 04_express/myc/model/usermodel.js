const mongoose = require("mongoose")
const userSchmea = new mongoose.schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const userModel = new mongoose.model("emp",userSchmea)

module.exports=userModel