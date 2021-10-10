const express = require('express')

const app = express();

const slash = (req,res)=>{
    res.json(`thank you post`)
};
const middle = (req,res,next)=>{
    console.log(req.params)
    next()
}
const response = (req,res)=>{
    res.status(200).send(req.params)
};
app.get('/use/:a/bcd/:e',middle,response);

app.post('/',slash);

app.listen(5000)