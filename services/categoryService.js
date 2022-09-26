const db = require('../config/db')

const categoryQuery = () => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT * FROM category`,
            (err, result) => {
                !err ? resolve(result) : reject([]);
            }
        )
    })
};

module.exports = {categoryQuery}