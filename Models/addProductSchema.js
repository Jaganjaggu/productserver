const mongoose = require('mongoose')

const addProductSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    productimg:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const products = mongoose.model("products",addProductSchema)

module.exports = products