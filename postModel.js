const mongoose=require("mongoose");

const postModel=mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    like:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Like",
    }],
    comment:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Comment",
    }]
})
module.exports=mongoose.model("Post",postModel);