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
    res.send("User Management API v0\nLibrePOS Version " + VERSION + "\n");
})

// Get users
router.get("/get(/:selection)?", (req, res) => {
    
    if (req.params.selection == "all") {
        res.json({
            users: [
                { name: "John" }
            ]
        })
    } else {
        res.sendStatus(404)
    }
})

// Export
module.exports = router