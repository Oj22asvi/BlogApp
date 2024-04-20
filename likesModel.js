const mongoose=require("mongoose");

const likesModel=mongoose.Schema({
    post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",
    },
    user:{
     type:String,
     require:true,
    }
})
module.exports=mongoose.model("Like",likesModel);