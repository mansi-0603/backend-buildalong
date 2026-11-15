// server ko create krna

const express = require("express")

const app = express()

// array of object banega notes jismei dher saare notes store hongi

const notes = []

// server prr data aa rha h - frontend se data aa rha h
// post method used here --> API name = /notes
app.post('./notes', (req, res) => {
    console.log("notes created successfully!");
})


module.exports = app;  