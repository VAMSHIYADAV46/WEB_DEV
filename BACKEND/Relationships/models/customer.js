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


orderSchema = new Schema({
    item : String,
    price : Number,
})

Order = mongoose.model("Order",orderSchema)


customerSchema = new Schema({
    name: String,
    orders : [{
        type : Schema.Types.ObjectId,
        ref : "Order"
    }]
})

Customer = mongoose.model("Customer",customerSchema)

const addOrder = async () => {
    order1= Order({item:"Noodles",price : 80})
    order2= Order({item:"Fried rice",price : 70})

    await order1.save().then((res)=>{
        console.log(res)
    })

    await order2.save().then((res)=>{
        console.log(res)
    })
}


addOrder()

palceOrder = async () => {
    customer1 = new Customer({name:"Vamshi"})
    orderObj1= await Order.findOne({item:"Fried rice"})
    orderObj2= await Order.findOne({item:"Noodles"})
    customer1.orders.push(orderObj1)
    customer1.orders.push(orderObj2)
    customer1.save().then((res)=>{
    console.log(res)
    })
}

palceOrder()





const addCustomer = async()=>{
    cust1  = new Customer({
        name : "Arjun"
    })

    order1 = new Order({
        item : "Pizza",
        price : 199
    })


    cust1.orders.push(order1)

    await cust1.save().then(console.log("Customer saved...!"))
    await order1.save().then(console.log("Order saved...!"))
}

// addCustomer()