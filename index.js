//step1--->instantiate express
const express=require("express");
const app=express();

//step2 inport port number
//import .env
require("dotenv").config();
const Port=process.env.PORT||3000;
//middleware
app.use(express.json());
//import routes
const routes=require("../BlogApp/routes/Blogroutes");
//mount
app.use("/api/v1",routes);
//server live
app.listen(Port,()=>{
    console.log(`server has become live at port ${Port}`);
})
//db connect
const dbConnect=require("../BlogApp/.config/Database");
dbConnect();

//by default route
app.get("/",(req,res)=>{
res.send("this is your bydefault page");
})
