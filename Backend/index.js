const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    res.send("standard GET respond");
});

app.post("/r",(req,res)=>{
    // const {user,pass}=req.body;
    res.send("standard POST response ");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});