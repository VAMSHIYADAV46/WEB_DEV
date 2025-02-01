const express = require("express")
const ExpressError = require("./ExpressError")
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
        throw new ExpressError(402,"ACCESS DENIED")

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
    console.log("--------------------------------------------------------------------------------------------------------------------------------------------")
    next(); // Pass to the next middleware/route handler
});




app.get("/",(req,res)=>{
    console.log("Root route")
    res.send("I am Root")
})


app.get("/admin",(err,req,res)=>{
    throw new ExpressError(403,"Forbidden error ocurred")

})


// app.use((req,res)=>{
//     res.status(404).send("Page not Found")
// })

app.use((err,req,res,next)=>{
    console.log("ERROR")
    // throw new ExpressError(401,"CUSTOM ERROR")
    let{status=500,message="ERROR OCCURED....!"}=err
    res.status(status).send(message)
})


app.listen(port,(req,res)=>{
    console.log("app is listening")
})



//--------------------------------------------------------------------------------------------------------------------------------------------------------//

//warpAync

// function warpAsync(fnx) {
//     return function(err,req,res,next){
//         fnx()
//     }
// }



//--------------------------------------------------------------------------------------------------------------------------------------------------------//


// validation error handling

// validateError = ()=>{
//     console.log("ERROR")
//     return err
//     next()
// }


// app.get("/post",(err,req,res,next)=>{
//     console.log(err.name)
//     if(err.name == "Validation Error"){
//         validateError(err)
//     }
//     else{
//         next()
//     }
// })