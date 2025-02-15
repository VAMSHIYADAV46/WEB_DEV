const mongoose = require("mongoose")
const Schema= mongoose.Schema

main().then(
    console.log("CONNECTED TO DATABASE")
).catch((err)=>{
    console.log(err)
})



async function main() {
    await mongoose.connect("mongodb://localhost:27017/relationDemo")
}


const userSchema =  new Schema({
    username : String,
    addresses : [
        {
            _id : false,
            location : String,
            city : String
        }
    ]
}
)

User = mongoose.model("User",userSchema);

let user1 = new  User({
    username : "Vamshi Yadav",
    addresses : [
        {
            
            location : "2-79 gandhi statue",
            city : "Nirmal"
        }
    ]
}
)

user1.addresses.push({ location: '7-46 office', city: 'Nirmal' })

user1.save().then((res)=>{
    console.log(res)
})