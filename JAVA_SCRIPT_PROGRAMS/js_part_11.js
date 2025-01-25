// function one(params) {
//     return 1
// }
// function two(params) {
//     return one() + one()
// }
// function three(params) {
//     ans= one() + two()
//     console.log(ans)
// }


// three()

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//


// >>>>>>>  js is a single threaded language but it is working as multi threaded lang using browser//

// setTimeout(() => {
//     console.log("hello world")
// },2000);

// setTimeout(() => {
//     console.log("hello nani")
// },3000);


// console.log("hello vamshi")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// callback hell topic //

// h1 = document.querySelector("h1")

// function changecolor(color,delay,nextcolorchange) {
//     setTimeout(() => {
//         h1.style.color="red"
//     }, delay);
//     nextcolorchange()
// }

// //>>> callback hell //

// changecolor("red",1000,() => {
//     changecolor("blue",2000,()=>{
//         changecolor("yellow",3000,()=>{
//             changecolor("purple",4000,()=>{
//                 changecolor("black",5000)
//             })
//         })
//     })
// })

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//promises//

h1 = document.querySelector("h1")

async function changecolor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (color) {
                h1.style.color= color
                resolve()
            }
            else
            {
                reject()
            }
        }, delay);
    })
}


// let change_color=  changecolor("red",1000)

// change_color
// .then((result)=>{
//     console.log("color is changed",result)
//     return changecolor("blue",1000)
// })
// .then((result)=>{
//     console.log("color is changed",result)
//     return changecolor("green",1000)
// })
// .then((result)=>{
//     console.log("color is changed",result)
//     return changecolor("yellow",1000)
// })
// .catch((error)=>{
//     console.log("color not changed",error)
// })


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// await //

// here using await keyword we reduced the above code //

// when we use promises we have to use async and await in the fun call //

// async function demo() {
//    await changecolor("red",1000)
//    await changecolor("blue",1000)
//    await changecolor("green",1000)
//    await changecolor("yellow",1000)
// }

// demo();