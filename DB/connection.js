const mongoose = require('mongoose')
// const connectionString = process.env.DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/productsApp").then(()=>{
    console.log("Mongoose connection Successfully connected with Product Server");
}).catch((err)=>{
    console.log(`Mongodb connection failed!! Error: ${err}`);
})