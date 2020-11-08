const express = require('express');

const mongodb = require('mongoose')
var cors = require('cors')
const app = express()

const infoschema = require("./infochema");

app.use(express.json());
app.use(cors())


app.post("/create",(req,res)=>
{
  var data = new infoschema({
      Name:req.body.Name,
      Age:req.body.Age,
      City:req.body.City,
  });
  data.save();
  res.send(data);
});

app.get("/data",async (req,res)=>{
    var findata = await  infoschema.find();
    try {
        res.send(findata);
    } catch (error) {
        console.log(error);
    }
    
});


app.delete("/delete/:id",(req,res)=>{
    infoschema.findByIdAndRemove(req.params.id,function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Delete Successfully");
        }
    })
});


mongodb.connect("mongodb://localhost/tutorial",{ useUnifiedTopology: true ,useNewUrlParser: true  },(err)=>{
    if(err)
    {
        console.log(err);
    }
    
})

app.listen(3000);