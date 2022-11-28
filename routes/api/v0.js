// Setup env variables
require('dotenv').config()
const VERSION = process.env.VERSION

// Setup express
const express = require("express")
const router = express.Router()

// Check if API exists
router.get("/", (req, res) => {
    res.sendStatus(200)
})

// Get version
router.get("/version", (req, res) => {
    res.send("API v0\nLibrePOS Version " + VERSION + "\n");
})

// User management
const v0_users = require("./v0_users")
router.use("/user", v0_users)

// Export
module.exports = router