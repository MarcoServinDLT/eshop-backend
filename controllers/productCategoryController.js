const productCategoryService = require('../services/productCategoryService')

const getProductsByCategory = async (req, res) => {
    const {category} = req.params
    try {
        const products = await productCategoryService.productQueryByCategory(category)
        if(products.length)
            res.status(200).json({
                message: "Products obtained by category.",
                data: products
            })
        else
            res.status(204).send("No product was found for this category.")
    } catch(err){
        res.status(500).send(err)
    }
};

const getProductsByNameAndCategory = async (req, res) => {
    const {category, productName} = req.params
    try {
        const products = await productCategoryService.productQueryByNameAndCategory(productName, category)
        if(products.length){
            res.status(200).json({
                message: "Products obtained by name and category.",
                data: products
            })}
        else
            res.status(204).send("Product not found.")
    } catch {
        res.status(500).send(err)
    }    
}

module.exports = {getProductsByCategory, getProductsByNameAndCategory}