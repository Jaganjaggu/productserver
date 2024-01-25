// require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')
// const path = require('path');

// creates an Express Application
const productServer = express()

productServer.use(cors())
productServer.use(express.json())

productServer.use(router)
productServer.use('/uploads',express.static('./uploads'))
// productServer.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 4000 || process.env.PORT
productServer.listen(PORT,()=>{
    console.log(`Project Product App server started at ${PORT} and waiting for client request!!!`);
})

productServer.get('/',(req,res)=>{
    res.send(`<h1>Product App    server started and waiting for client requests!!!!!! </h1>`)
})

