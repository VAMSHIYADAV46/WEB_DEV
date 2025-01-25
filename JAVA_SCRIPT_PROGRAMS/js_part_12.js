// // async fun //






// function getnum() {
//     return new Promise((resolve, reject) => {
//         num= Math.floor(Math.random()*10+1)
//         setTimeout(()=>{
//            console.log(num)
//             resolve()
//             console.log(Promise)
//         },1000)
//     })
// }


// // await //

// async function demo() {
//     await getnum()
//     await getnum()
//     await getnum()
//     getnum()
// }

// demo()

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// call this function to get automatic or default promise of this  function // 

// async function hello() {
//     return "hello world"
// }










//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// h1 = document.querySelector("h1")
// url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
//     console.log(data.fact)
//     // console.log(data.length)
// })
// .catch((err)=>{
//     console.log("ERROR IS ",err)
// })


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// url = "https://catfact.ninja/fact";

// async function getfacts() {
//     fetch(url)
//     .then((res)=>{
//         console.log(res)
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data.fact)
//     })

//     .catch((err)=>{
//         console.log("ERRPR IS: ",err)
//     })
// }

// getfacts(url)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// usin axios (alternative / better version of "fetch") //

// url = "https://catfact.ninja/fact";

// async function getfacts(url) {
//     try{
//         res = await axios.get(url)
//         .then((res)=>{
//             // console.log(res)
//             fact=res.data.fact;
//             // console.log(fact)
//         })
//     }
//     catch(err){
//         console.log("ERROR : ",err)
//     }
// }

//  getfacts(url)

// btn = document.querySelector("button");
// p = document.querySelector("p");

// btn.addEventListener("click",()=>{
//     getfacts(url)
//     // console.log(fact)
//     p.innerText = fact;
    
// })

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// sending header with api request //

url = "https://icanhazdadjoke.com/";
const  config = { headers : {accept:"text/plain"}}

async function callsaul() {
   res = await axios.get(url,config)    // if you wanted to know the difference remove config parameter //
   console.log(res.data)
}

btn = document.querySelector("button");
p = document.querySelector("p");

btn.addEventListener("click",()=>{
   callsaul()

})
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

