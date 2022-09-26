const db = require('../config/db') 

// Service to get all products. //
const productQuery = () => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT product.*, category.name as category_name FROM product
            INNER JOIN category
            ON product.category = category.id`,
            (err, result) => {
                !err ? resolve(result) : reject("Fail on query.");
            }
        )
    })
};

// Service to get products by search. //
const productQueryByName = (productName) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT product.*, category.name as category_name FROM product
            INNER JOIN category
            ON product.category = category.id 
            WHERE product.name LIKE ?`,
            [`%${productName}%`],
            (err, result) => {
                !err ? resolve(result) : reject("Fail on search product.");
            }
        )
    })
};

module.exports = {productQuery, productQueryByName}