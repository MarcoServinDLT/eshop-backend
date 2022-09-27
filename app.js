require('dotenv').config()
const db = require('./config/db')
const cors = require('cors')

//swagger
const swaggerUI = require("swagger-ui-express")
const YAML = require('yamljs')
const swaggerJSDoc = YAML.load('./api.yaml')

const port = process.env.PORT || 8000
const express = require('express')
app = express()

// Definition of API routes. //
const apiRoutes = require('./routes/routes')

// keep alive db connection //
setInterval( () => { db.query("SELECT 1") },
    3000
)

// Allow request. //
app.use(cors())

// definition of the server. //
app.use('/api', apiRoutes)
// API documentation. //
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc))

// initialization of the application. //
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})