const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventDescription:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required: true
    },
    tickets:[{
        ids:"",
        ticket:"",
        price:""
    }]
})
const ticket = new mongoose.model("Tickets" , schema)
module.exports = ticket 
