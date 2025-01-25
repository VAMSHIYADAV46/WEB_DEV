// // // // document.all[8].innerText="SPIDER MAN"  //RUN ON console//

// // // // des = document.getElementById("description")
// // // // console.dir(des)

// // // // // des.innerText = "hello"


// ------------------------------------------------------------------------------------------------------------------////
// // // // anchor_tag = document.getElementsByClassName("boxLink")
// // // // console.dir()

// ------------------------------------------------------------------------------------------------------------------////

// // // // a=document.querySelector(".oldImg")
// // // a=document.querySelectorAll(".oldImg")
// // // console.log(a)
// ------------------------------------------------------------------------------------------------------------------////

// para = document.querySelector("p")

// console.log(para.innerText)
// para.textContent
// para.innerHTML
// heading = document.querySelector("h1")
// heading.tex

// heading.innerHTML = "<i>spider man</i>"
// heading.innerHTML = "<b>spider man</b>"
// heading.innerHTML = "<u>spider man</u>"

// ------------------------------------------------------------------------------------------------------------------////
//// set and get addtribute////

// img = document.queryse

// img = document.querySelector("h1")
// img = document.querySelector("img")

// main_img = document.querySelector("img")

// main_img.getAttribute('class')

// main_img.getAttribute('id')

// main_img.getAttribute('src')

// main_img.setAttribute('src',"Dom_asserts/assets/creation_3.jpeg")

// main_img.setAttribute('id',"cover_img")


// ------------------------------------------------------------------------------------------------------------------////
//// style manupilation ////

// heading = document.querySelector("h1")
// heading.style.backgroundColor = "yellow"
// heading.style.backgroundColor = "red"

// heading.style.colo = "red"
// heading.style.color= "red"
// heading.style.backgroundColor = "white"

// console.dir(heading.style)

// heading.style.paddingBottom ="100px"
// heading.style.paddingBottom ="1000px"
// ------------------------------------------------------------------------------------------------------------------////
//// class list////

// heading = document.querySelector("h1")

// heading.classList
// heading.classList.add("green")

// heading.classList.add("underline")

// heading.classList
// heading.classList.remove("green")

// heading.classList.contains("green")

// heading.classList.toggle("green")



// ------------------------------------------------------------------------------------------------------------------////

//// navigate (tree relation traversing and manupilation ) ////

// heading = document.querySelector("h1")

// box = document.querySelector(".box")

// box.children

// box.children.style.color = "red"

// cosole.dir(box.children.style)

// console.dir(box.children.style)


// heading.nextElementSibling

// main_img = heading.nextElementSibling

// main_img.previousElementSibling.style.color = "red"

// child = box.children
// h4 = document.querySelector("h4")
// h4.parentElement


// ------------------------------------------------------------------------------------------------------------------////
//// adding elements on page ////


// body = document.querySelector("body")

// newp = document.createElement("p")

// newp.innerText = "hi hello i am created just now"

// console.dir("newp")


// console.dir(newp)

// body.appendChild(newp)

// newp.append("bhcjhdsjhvjhvsjvcjvjv")

// newp.append(" bhcjhdsjhvjhvsjvcjvjv")

// newp.prepend(" bhcjhdsjhvjhvsjvcjvjv")

// body.insertAdjacentElement("afterbeging",newp)
// 1
// body.insertAdjacentElement("afterBeging",newp)

// body.insertAdjacentElement("afterBegin",newp)

// body.insertAdjacentElement("afterEnd",newp)

// body.insertAdjacentElement("afterBegin",newp)

// body.insertAdjacentElement("beforeEnd",newp)

// body.insertAdjacentElement("afterEnd",newp)

// ------------------------------------------------------------------------------------------------------------------////

// // removing the elements ////

// heading = document.querySelector("h1")

// heading.remove()

// box = document.querySelector(".box")


// box.removeChild(a)

// h4 = document.querySelector("h4")

// box.removeChild(h4)




// ------------------------------------------------------------------------------------------------------------------////

////// task //////

// body = document.querySelector("body")

// para = document.createElement("p")
// para.innerText="hey i am red"
// para.style.color = "red"
// body.appendChild(para)

// h3 = document.createElement("h3")
// h3.innerText="hey i am blue h3"
// h3.style.color = "blue"
// body.appendChild(h3)


// div= document.createElement("div")
// h1= document.createElement("h1")
// para1= document.createElement("p")

// div.classList.add("div")

// h1.innerText="i am in a div"
// para1.innerText="ME TOO!"

// body.appendChild(div)

// div.appendChild(h1)
// div.appendChild(para1)


// ------------------------------------------------------------------------------------------------------------------////

btn = document.querySelector("button")
// console.dir(btn)



// btn.onclick = 
//     function () {
//         console.log("button clicked")
//     }

// btn.ondblclick = 
//     function () {
//         console.log("button double clicked")
//     }

//######################################################################################//

function hello() {
    console.log("button clicked (hello)")
}

// btn.onclick = hello;

// btn.onmouseenter = hello;




// btn = document.querySelector("button")

// btn.onclick = function () {
//     console.log("button clicked")
// }
// ------------------------------------------------------------------------------------------------------------------////
//addEventLsteners//

// btn = document.querySelector("button")
// console.dir(btn)

// function danger() {
//     alert("Danger ahead..........!")
// }

// function drling() {
//     alert("your the one ")
// }

// btn.addEventListener("click",function danger() {
//     alert("Danger ahead..........!")
//     alert("your the one ")

// })









// ------------------------------------------------------------------------------------------------------------------////
// h1 = document.querySelector("h1")
// h3 = document.querySelector("h3")
// p = document.querySelector("p")
// btn= document.querySelector("button")


// function change() {
//     console.log(this.innerText)
//     console.dir(this)
//     this.style.backgroundColor= "black"
//     this.style.color= "white"
//     // this.style.display = "none"
// }

// h1.addEventListener("click",change)
// h3.addEventListener("click",change)
// p.addEventListener("click",change)
// btn.addEventListener("click",change)





// ------------------------------------------------------------------------------------------------------------------////

// form= document.querySelector("form");
// form.addEventListener("submit",function (event) {                                 // it is a default return object in addEventListener() //
//     event.preventDefault()                                                       // it prevents the default implementation of the process//
//     console.log("submited")
// })

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// form= document.querySelector("form");
// form.addEventListener("keydown",function (event) {                                 // keyup,keydown,keypress............. are some keyboarrd events //
//     event.preventDefault()                                                       
//     console.log("keydown")
// })








// ------------------------------------------------------------------------------------------------------------------////

form= document.querySelector("form");
// username = document.querySelector("#id");
// password = document.querySelector("#pass");
// form.addEventListener("submit",function (event) {
//     event.preventDefault()
//     console.log(`username = ${username.value}`)                                                       
//     console.log(`password = ${password.value}`)                                                       
// });



//#########################################################################################//

// form.addEventListener("submit",function (event) {
//     event.preventDefault()
//     console.log(form[0].value)
//     console.log(form[1].value)
// })



// ------------------------------------------------------------------------------------------------------------------////


// input = document.querySelector("#text");
// para = document.querySelector("p");

// input.addEventListener("input",function (event) {
    //     para.innerText = input.value
    // })
    
// ------------------------------------------------------------------------------------------------------------------////

// form.addEventListener("scroll",function (event) {
    //     event.preventDefault()
    //     console.log(scroll)
    // })
    
    
    
// ------------------------------------------------------------------------------------------------------------------////
// // event bubbling //
// div = document.querySelector("div")
// ul = document.querySelector("ul")
// lis = document.querySelectorAll("li")

// div.addEventListener("click",function (event) {
//     event.stopPropagation()
//     console.log("div is clicked")
// })
// ul.addEventListener("click",function (event) {
//     event.stopPropagation()
//     console.log("ul is clicked")
// })
// for (li of lis) {
//     li.addEventListener("click",function (event) {
//         event.stopPropagation()
//         console.log("li is clicked")
//     })
    
// }








// ------------------------------------------------------------------------------------------------------------------////





