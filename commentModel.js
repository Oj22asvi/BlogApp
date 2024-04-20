const mongoose=require("mongoose");

const commentModel=mongoose.Schema({
   post:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"Post", //ref from post model
   },
   user:{
    type:String,
    require:true,
   },
   body:{
   type:String,
    require:true,
   }

})
module.exports=mongoose.model("Comment",commentModel);
