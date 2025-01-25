const express = require("express")
const app = express()
port = 8080

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`server is listening on port : ${port}`)
})

app.get("/",(req,res)=>{
    res.send("you hit home server")
})

app.get("/register",(req,res)=>{
    let {username} = req.query;
    res.send(`hello welcome ${username}! through get request`)
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    let {username,password} = req.body;
    res.send(`hello welcome ${username}! through post request`)
})