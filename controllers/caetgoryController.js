const categoryServices = require('../services/categoryService')

const getAllCategories = async (req, res) => {
    try{
        const categories = await categoryServices.categoryQuery()
        res.status(200).json({
            message: "Categories Obteined.",
            data: categories
        })
    }catch {
        res.status(500).send(err)
    }
}

module.exports = {getAllCategories}