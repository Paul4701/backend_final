require('dotenv').config()

const express=require("express")
const app=express()
const mongoose=require("mongoose")


mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection;
db.on('error',(error)=>console.error('error'))
db.once('open',()=>console.log('sucess'))

app.use(express.json())
// it allows to accept the json passed with in the body of req 
const subscriberRouter=require('./routes/subscribers')

app.use('/subcribers',subscriberRouter)
app.use('/',(req,res)=>{
    res.send("3000")
})

app.listen(3000,()=>{
    console.log("server connected")
})