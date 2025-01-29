btn= document.querySelector("button")
ul = document.querySelector("ul")
inp = document.querySelector("input")



btn.addEventListener("click",function () {
    item = document.createElement("li")
    item.innerText = inp.value
    
    dlbtn = document.createElement("button")
    dlbtn.innerText="DELETE"
    dlbtn.classList.add("delete")

    item.appendChild(dlbtn)
    ul.appendChild(item)
    inp.value=""
})


ul.addEventListener("click",function (event) {                    // here it(ul) is done to apply the condition to newly creaed elements tooo............
    
    // console.log(event.target)
    
    // console.log(event.target.nodeName)
    // console.log(event.target.parentElement)

    if (event.target.nodeName == "BUTTON") {
        par = event.target.parentElement
        par.remove()

        console.log("DELETED")
    }
    
    // listItem = event.target
    // dad = listItem.parentElement
    // console.log(` deleted`)
    // console.log()
    // par=listItem.parentElement
    // par.remove()
    
})



// dlbtns = document.querySelectorAll(".delete")

// // for (dlbtn of dlbtns) {
// //     dlbtn.addEventListener("click",function () {
// //         par= this.parentElement
// //         console.log(par)
// //     })
    
// //




