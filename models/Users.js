const mongoose = require("mongoose");

const userSchema = new mongoose.Schema([{
    name:{
        type:String,
        required:true
    },
    joining_date:{
        type:Date,
        default: Date.now
    }
}])

mongoose.model('Agent',userSchema);