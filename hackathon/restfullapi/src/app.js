const express = require('express');
require("./database/connection")
const app=express();
const Student=require("./models/student")
const port =process.env.PORT || 3000;

app.use(express.json())

app.post('/student',async (req,res)=>{
    console.log(req.body)
    try{ const user= new Student(req.body)
       await user.save().then(()=>{
            res.status(201).send("done")
        }).catch((e)=>{
            res.status(401).send(e)
        })
        // res.send("hi")
    }
        catch(e){
console.error(e)
        }
   
})
app.listen(port,()=>{
    console.log(`connection is setup at port ${port}`)
})