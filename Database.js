const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
    })
   .then(console.log("DATABASE CONNECTED SUCCESSFULLY"))
   .catch((err)=>{
    console.log("DATABASE NOT CONNECTE SUCCESSFULLY"),
    console.log(err);
    process.exit(1);
})
};

module.exports=dbConnect;