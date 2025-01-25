// // // console.log("hello world.....!")
// // // a=10
// // // b=20
// // // console.log("THE SUM IS: ",a+b)


// // // // Template letrals......//
// // // console.log("The shown below line is printed by using Template letrals......")
// // // console.log(`THE SUM IS:  ${a+b}`)

// // // //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// //

// // // //comparision types//

// // // console.log(0 == false)    // here different data types are compared and here only values will be compared not data types
// // // console.log(5 == "5")      // here if data type can be convertable then it will be converted internally and compared


// // // // To compare the value and datatype we use "===" operator//
// // // console.log(5 === "5") 
// // // console.log(0 === false)

// // // // //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// //


// // // // here we compare the  unicodes of the charecters  //

// // // console.log("a" >  "A")   // basically lower case alphabets are starts with 62 and increases by 2 //
// // // console.log("A" >  "a")   // basicall uppere case alphabets are starts with 42 and increases by 2 //


// // // //ALERTS AND PROMPTS//
// // // alert("Danger ahead")


// // // firstName = prompt("ENTER YOUR FIRSTNAME: ")
// // // lastName = prompt("ENTER YOUR LASTNAME: ")
// // // alert(`Hello ${firstName+" "+lastName} ...............! `)


// // // // //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// //
  

// // // // string methods//

// // // str1="   nani    ";
// // // console.log(str1.trim())
// // // console.log(str1)               // here in js strings are immutable if we perform any method on a string it will be create a new string and give o/p in it but it do not  change the value of it//

// // // str2=str1.trim();
// // // console.log(str2)


// // // // //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// //

// // // arrays and its methods //

// // arr=[1,2,3,4,5,6,7,8,9,10]
// // console.log(arr)

// // arr1=["vamshi","loki","roshan","arjun","bhaskar"]
// // console.log(arr1)
// // console.log(arr1[0])
// // console.log(arr1[0][0])

// // arr1.push("srijan")               // push nappends the element at last of array //
// // console.log(arr1)

// // arr1.pop()                       // pop removes the last element from the array//


// // arr1.unshift("lohit")          // unshift appends the element at the starting of the array//
// // console.log(arr1)


// // arr1.shift()                  // shift removes the element from starting of the array //
// // console.log(arr1)


// // console.log(arr1.indexOf("bhaskar"))     // indexOf method returns the index of the elemnet //


// // console.log(arr1.includes("bhaskar"))     // includes method returns the boolean value of the elemnet existance //

// // arr3=arr.concat(arr1)
// // console.log(arr3)

// // console.log(arr1.reverse())


// // // splice //
// // cars = ["bmw","audi","ferrari","ford","toyato"]       
// // console.log(cars)                                                       // -------->   syntax  <---------------- //

// // cars.splice(4)                                                          // splice(start)
// // console.log(cars)

// // cars.splice(3,1)                                                        // splice(start, deleteCount)
// // console.log(cars)

// // cars.splice(2,0,"ford", "toyato")                                       // splice(start, deleteCount, item1)
// // console.log(cars)                                                       // splice(start, deleteCount, item1, item2)
// //                                                                         // splice(start, deleteCount, item1, item2, /* …, */ itemN)
                                                                        


// // array refference //            // javascript part-4 array refference
// // a = ['a','b','c','d']            // here a is a refference variable which holds the address of the values but not the direct value
// // console.log(a)
                         

// // aCopy = a                      // here aCopy is a refference variable which holds thge same address as a
// // console.log(a)                 // aCopy doesnot contains the a values it contains/holds the address of them as a

// // console.log(a[1] === aCopy[1])

// // aCopy[4]="e"
// // console.log(aCopy)             // here aCopy doesnot contains the values as a copy if you make change in aCopy it will reflect in a because the reffernce address is same
// // console.log(a)



// // const array //
// // const tree=["mango","banana","apple"]
// // tree[2]="orange"

// // console.log(tree)

// // tree = ["grape","strawberry","leechi"]                          // here itb gives the error because the refference variable is constant but not its values are constant 
// //                                                                 // so if we change the values it wont give any error but iff we overwrite the refference it throws error
// // treeCopy = tree
// // console.log(tree)


// // nested array //

// // newArr= [[1,2],[3,4],[5,6]]
// // console.log(newArr)


// // // // //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------// //


// // Guess the movie //
// alert("GUESS MY FAVOURITE SONG ")
// fav="chalo re chalo"
// guess=prompt("ENTER THE FAVOURITE SONG OF DRLING ")

// if (guess != fav) {
//     while (guess != fav && guess != "quit") {
//         console.log("SORRY DRLNG TRY AGAIN.........")
//         guess=prompt("ENTER THE FAVOURITE SONG OF DRLING ")
        
//     }
// elseif (){

// }
// } else {
//     console.log("NUVVU RA NA PRANA SNEHITHUDIVI NIKOSAM NA HEART ISTHA RA.......") 
// }


//<--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->//

// objject literals //

// const obj ={
//     name : "nani",
//     age : 20,
//     1 : "yes",
//     true : "no",
//     null : 3,
//     undefined : 9
// }


// obj.name = "vamshi"
// console.log(obj)


// obj.gender = "male"
// console.log(obj)




// delete obj.gender
// console.log(obj)



//<--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->//



// const mul = (a,b) =>             // implicite return in arrow function //
//      a*b

// mul(5,5)


//<--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->//




// const student ={
//     name : "vamshi",
//     age : 20,
//     city: "nirmal",
//     prop: this,
//     getinfo:function () {
//         console.log(this)    // scope = student
//     },
//     getinfo2: ()=>{
//         console.log(this)   // scope = window
//     }
    
// }





// student.getinfo()
// student.getinfo2()






