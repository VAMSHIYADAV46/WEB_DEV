const express = require("express")
const app = express()
const port = 8080


// app.use((req,res,next)=>{
//     console.log("1 middelware")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("2 middelware")
//     next()
// })



// sample access authenticator
const checkToken = (req,res,next)=>{
    let {token} = req.query
    if (token == "give access") {
        console.log("access granted")
        next()
    } else {
        // res.status(404).send("access denied")
        throw new Error("Access denied");

    }
};

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query
//     if (token == "give access") {
//         console.log("access granted")
//         next()
//     } else {
//         res.status(404).send("access denied")
//     }
// })
app.get("/api",checkToken,(req,res)=>{
    res.send("data")
})

app.use("/random",(req,res,next)=>{
    console.log("I a middelware only for random")
})

//logger middelware
app.use((req, res, next) => {
    req.responseTime = new Date().toString(); // Add response time to request
    console.log(`Method: ${req.method}`);    // Log HTTP method
    console.log(`Time: ${req.responseTime}`); // Log request time
    console.log(`Path: ${req.path}`);         // Log request path
    console.log(`Hostname: ${req.hostname}`); // Log request hostname
    next(); // Pass to the next middleware/route handler
});


// app.use((req,res)=>{
//     res.status(404).send("Page not Found")
// })


app.get("/",(req,res)=>{
    console.log("Root route")
    res.send("I am Root")
})


app.listen(port,(req,res)=>{
    console.log("app is listening")
})