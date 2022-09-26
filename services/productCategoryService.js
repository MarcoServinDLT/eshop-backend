const db = require('../config/db')

// Service to get products by category. //
const productQueryByCategory = (category) => {
        return new Promise((resolve, reject) => {
        db.query(
            `SELECT product.*, category.name as category_name FROM product
            INNER JOIN category
            ON product.category = category.id
            WHERE product.category = ?`,
            [category],
            (err, result) => {
                !err ? resolve(result) : reject("Error category");
            }
        )
    })
};

// Service to search product by category filter. //
const productQueryByNameAndCategory = (productName, category) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT product.*, category.name as category_name FROM product
            INNER JOIN category
            ON product.category = category.id
            WHERE product.name LIKE ? AND
            category.id = ?`,
            [`%${productName}%`, category],
            (err, result) => {
                !err ? resolve(result) : reject([]);
            }
        )
    })
}

module.exports = {productQueryByCategory, productQueryByNameAndCategory}