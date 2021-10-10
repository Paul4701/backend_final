const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");
mongoose.connect("mongodb://localhost:27017/pintuname",{useUnifiedTopology: true,
useNewUrlParser: true})
.then(()=>{
    console.log('connection success');
}).catch((err)=>{
    console.log(err);
});

const listInfo=new mongoose.Schema({
        name:String,
        ctype:String,
        videos:Number,
        author:String,
        active:Boolean,
        date:{
            type:Date,
            default:Date.now
        }
    
})

   const Playlist=new mongoose.model("Playlist",listInfo)

const createDocument = async()=>{
    try{
        const reactPlaylist= new Playlist({
            name:"react js",
            ctype:"front end",
            videos:50,
            author:"pintu",
            active:true
        })

        const jsPlaylist= new Playlist({
            name:"javascript",
            ctype:"Back End",
            videos:50,
            author:"pintu",
            active:true
        })

        const expressPlaylist= new Playlist({
            name:"express js",
            ctype:"front end",
            videos:50,
            author:"pintu",
            active:true
        })

        const mongoPlaylist= new Playlist({
            name:"mongo DB",
            ctype:"database",
            videos:50,
            author:"pintu",
            active:true
        })
     
        const result=await Playlist.insertMany([reactPlaylist,mongoPlaylist,expressPlaylist,jsPlaylist]);
        console.log(result);  
    }catch(err){
        console.log(err);
    }
}

//  createDocument();

const getDocument=async()=>{
    const result=await Playlist.find({ctype:'front end'}).select({name:1}).sort({name:1});
    console.log(result)
}
 
getDocument()

const updateDocument=async(_id)=>{
    try{
        const result=await Playlist.findByIdAndUpdate({_id},{
            $set : {
                name:"express"
            }
        },{
            new:true,
            useFindAndModify:true
        });
         console.log(result)   
        
    }catch(err){
        console.log(err);
    }

}

updateDocument("61609949b211affab7e667af")