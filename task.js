const mongoose = require( "mongoose")
const taskSchema = new mongoose.Schema({

    task_name:{
        type: String,
        required:"Please enter your task name"
    },
    address: String,
    phone: {
        type: String,
        validate(value) {
            if(!validator.isMobilePhone(value)) {
                throw new error("Phone is not valid")
            }
        }
    },
    password:{
        type: String,
    
    }
   
})

module.exports = mongoose.model("Task", taskSchema);
