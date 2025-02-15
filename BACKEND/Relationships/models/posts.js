const mongoose = require("mongoose")
const Schema = mongoose.Schema

main().then(()=>{
    console.log("CONNECTED TO DATABASE")
}).catch((err)=>{
    console.log(err)
})

async function main() {
    await mongoose.connect("mongodb://localhost:27017/relationDemo")
}
userSchema = new Schema({
    username : String,
    email : String,
})

User = mongoose.model("User",userSchema)

postSchema = new Schema({
    content : String,
    likes : Number,
    user : [{
        type : Schema.Types.ObjectId,
        ref : "User"
        }]
})

Post = mongoose.model("Post",postSchema)


addpost = async ()=>{
    user1 = new User({
        username:"Nani",
        email:"nanidx46@gmail.com"
    })

    await user1.save().then((res)=>{
        console.log(res)
    })

    post1 = new Post({
        content : "Hello Drlngs..!",
        likes : 46
    })

    post1.user = user1

    post2 = new Post({
        content : "Hey Drlngs..!",
        likes : 63
    })

    post2.user = user1

    await post1.save()
    await post2.save()

}

// addpost()


findpost= async ()=>{
    res = await Post.findOne({}).populate("user")
    console.log(res)
}

findpost()









