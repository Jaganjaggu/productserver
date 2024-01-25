const products = require('../Models/addProductSchema')

exports.addAllProducts = async (req, res) => {
    console.log("inside the addAllProducts");
    try {
        const { productname, category, description } = req.body
        const productimg = req.file.filename
        console.log(productimg);
        console.log(`${productname}, ${category}, ${description} `);
        const newProduct = new products({
            productname, category, description, productimg
        })
        const productsaved = await newProduct.save()
        if (productsaved) {
            res.status(200).json("New product Saved")
        }
    } catch (err) {
        res.status(401).json(`addAllProducts API failed, Error: ${err}`)
    }
}

exports.viewAllProducts = async (req,res) => {
    console.log("Inside viewAllProduct function");
    try{
        const result = await products.find().sort({createdAt:-1})
        if(result){
            res.status(200).json(result)
        }
    }catch(err){
        res.status(401).json(`viewAllProducts API failed, Error: ${err}`)
    }
}

exports.deleteAProduct = async (req,res) => {
    console.log("Inside Delete A Product function")
    try{
        const {id} = req.params
        const removeProduct = await products.findByIdAndDelete({_id:id})
        res.status(200).json(removeProduct)
    }catch(err){
        res.status(401).json(`Delete a Product API failed, Error: ${err}`)
    }
}