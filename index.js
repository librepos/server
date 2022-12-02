// Setup env variables
require('dotenv').config()
const PORT = process.env.PORT || 80

// Setup express
const express = require("express")
const app = express()

// API v0 (strictly testing)
const api_v0 = require("./routes/api/v0")
app.use("/api/v0", api_v0)

// Get highest API version
app.get("/api", (req, res) => {
    res.send("v0")
})

// No API
app.get("/api/*", (req, res) => {
    res.sendStatus(404)
})

// Listen
app.listen(PORT)