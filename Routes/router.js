const express = require('express')
const router = new express.Router()
const addProductController = require('../Controllers/addPrductController')
const multerConfig = require('../Middlewares/multerMiddleware')

router.post('/products/add',multerConfig.single('productimg'),addProductController.addAllProducts)

router.get('/products',addProductController.viewAllProducts)

router.delete('/product/delete/:id',addProductController.deleteAProduct)

router.get('/product/:id',addProductController.getProductById)

router.put('/product/edit/:id',multerConfig.single('productimg'),addProductController.editProduct)

module.exports = router