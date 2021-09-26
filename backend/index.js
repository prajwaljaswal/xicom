const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose")
const ticket = require('./schema')

app.listen(4000, () => {
  console.log("we are live on port");
});



mongoose.connect("mongodb://localhost/xicom",{useNewUrlParser : true, useUnifiedTopology:true})
mongoose.connection.once('open',()=>console.log("connected to database")).on('error',(error)=>console.log(error))
app.use(express.json());


app.post("/ticket", async (req,res)=>{

  const info = await new ticket({
  eventName:req.body.eventName,
  eventDescription:req.body.eventDescription,
  startDate:req.body.startDate,
  endDate:req.body.endDate,
  organizer:req.body.organizer

  })

  try{
    info.save()
    res.send(info)
  }
  catch(err){
    res.send(err)
  }

  // info.save().then(()=>{
  //   res.send(info)
  // }).catch((e)=>{
  //   res.send(e)
  // })

  
})

