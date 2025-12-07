const express = require('express');
const app = expree();

app.get('/', (req, res)=>{
    res.send("Well come to Devops app using Jenkins..!");
})

app.listen(3000, ()=>{
    console.log("The app is runnig at PORT:3000");
})