const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    
        email:{
            type:String,
            required:true,
            unique:[true,"email alreday exists"],
             Validate(v){
                 if(!validator.isEmail(v)){
                 throw new Error("invalid email")
                 }
             }
        },
        phone:{
            type:String,
            //  min:10,
             max:10,
             required:true,
             unique:true
        }
    
})

// we will create a new collection using this model 
const Student=new mongoose.model("Student",studentSchema)

module.exports=Student
