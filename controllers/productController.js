const productService = require('../services/productService')

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.productQuery()
        res.status(200).json({
            message: "Products obtained.",
            data: products
        })
    }catch {
        res.status(500).send(err)
    }
}

const getProductsByName = async (req, res) => {
    const {productName} = req.params
    try {
        const products = await productService.productQueryByName(productName)
        if(products.length)
            res.status(200).json({
                message: "List of products",
                data: products
            })
        else
            res.status(204).json({ message: "Product not found." })
    } catch(err){
        res.status(500).send(err)
    }
}

module.exports = {getAllProducts, getProductsByName}