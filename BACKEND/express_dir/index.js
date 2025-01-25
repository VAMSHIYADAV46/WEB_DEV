const express = require("express");

app = express()

port = 8080;

app.listen(port,()=>{
    console.log(`Server is listining on port ${port}`);   
})



// .use() is use for all routs it will send same response //

// app.use((req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     // console.log("REQUEST : ",req)
//     // console.log("RESPONSE",res)
//     res.send("<h1>YOUR FIRST SERVER IS READY TO SERVE</h1>")
// })


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// .get() is use for sepcific rout defined in parameter and "*" is  used for undefined routs//

// app.get("/",(req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     res.send("you sent request to root ")
// });

// app.get("/about",(req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     res.send("you sent request to about ")
// });

// app.get("/help",(req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     res.send("you sent request to help ")
// });

// app.get("*",(req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     res.send("you sent request to wildcard ")
// });


// app.post("*",(req,res)=>{
//     console.log("REQUEST RECEIVED ON SERVER")
//     res.send("you sent post request  ")
// });


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// pathparams //

// app.get("/:username",(req,res)=>{
//     // console.log(req.params)

//    let {username} = req.params


//    // ****only single response should be sent****//
// //    res.send("you sent request to root ")                          
//    res.send(`<h1>hello welcome to  ${username} page</h1>`)
// });


// app.get("/:username/:id",(req,res)=>{
//     // console.log(req.params)

//    let {username,id} = req.params


//    // ****only single response should be sent****//
// //    res.send("you sent request to root ")                          
//    res.send(`<h1>hello welcome to  ${username} page pass ${id}</h1>`)
// });

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//query string //

// app.get("/search",(req,res)=>{
//     // let {q} = req.query
//     // console.log(q)
//     console.log(req.query)

//     res.send(`you serched query : ${req.query}`)

// });





