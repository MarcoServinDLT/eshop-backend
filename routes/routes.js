const {Router} = require('express')
const router = Router()

// Geting controllers. //
const productController = require('../controllers/productController')
const categoryController = require('../controllers/caetgoryController')
const productCategoryController = require('../controllers/productCategoryController')

// Endpoints routes. //
// Welcome endpoint. //
router.get('/', (req, res) => {
    res.status(200).send("Welcome to the API.")
})

// Get all products //
router.get('/products', productController.getAllProducts)

// Get products by name //
router.get('/products/:productName', productController.getProductsByName)

// Get categories //
router.get('/categories', categoryController.getAllCategories)

// Get products by categories //
router.get('/category/:category', productCategoryController.getProductsByCategory)

// Get products by category and name //
router.get('/category/:category/:productName', productCategoryController.getProductsByNameAndCategory)

module.exports = router