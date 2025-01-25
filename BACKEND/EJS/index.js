const express = require("express");
const path = require("path");

// learn include (including subtemplates) i have left it here //
// <%- include(folder_name/file) %>

app=express()

port=8080;

// here we use "use" method not "set method" //

app.use(express.static(path.join(__dirname, '/public')))


app.set("view engine","ejs")

app.set('views', path.join(__dirname, '/views'));

app.listen(port,(req,res)=>{
    console.log(`SERVER IS LISTENING ON PORT : ${port}`)
    console.log("REQUEST HIT THE SERVER")
}) 

app.get("/",(req,res)=>{
    res.render('home.ejs' );

    // res.send("home route")
})
// app.get("/about",(req,res)=>{
//     res.render('about.ejs' );

//     // res.send("home route")
// })


// app.get("/ig/:username",(req,res)=>{
//     let {username } = req.params;
//     // console.log(username)
//     res.render("instagram.ejs",{username})
// })

// app.get("/ig/:username/:pass",(req,res)=>{
//     let {username ,pass} = req.params;
//     // console.log(username)
//     res.render("instagram.ejs",{username,pass})
// })


// app.get("/rolldice",(req,res)=>{
//     let diceval=Math.floor(Math.random()*6)+1
//     res.render("rolldice.ejs",{diceval})
// })




// -----------------------------------------------------------------------------------------------------------------------------------------------------------//



app.get("/ig/:username",(req,res)=>{
    let {username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    if(data){
        res.render("instagram.ejs",{data})
    }
    else{
        res.render("error.ejs",)

    }
    
})









































































































































































































































































app.get("*",(req,res)=>{
    res.send("unknown route")
})
