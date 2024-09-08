const express=require("express");
const fs=require("fs");
const server=express();

server.use(express.json())

server.get("/gettodos",(req,res)=>{
    try {
       
        let content=fs.readFileSync("db.json","utf-8");
        res.send(content)
        console.log(content)


    } catch (error) {
        console.log("something went wrong",error)
    }
})

server.post("/todopost",(res,req)=>{
    let bodyContent=req.body;
    fs.writeFileSync("db.json",bodyContent);
    console.log("thankyou for posting todos")
})





server.listen(8000,()=>{console.log("at 8000")})