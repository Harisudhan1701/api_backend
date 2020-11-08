const express = require('express');

const mongodb = require('mongoose')

const app = express()

//app.use(express.json());

app.use("/",(req,res)=>{
    res.json("hai");
});

app.listen(3000);