const express = require("express");

const app = express()

//middleware
app.use(express.json())


// array of object banega notes jismei dher saare notes store hongi
const notes = []

//server prr data send frontend se
//method API-- API & API name - /notes
app.post('/notes', (req, res) => {
    console.log(req.body)

    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully!"
    })

})

// GET method ---> "/notes" - API name
//get method se data fetch karna hai server se frontend prr
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetched successully",
        notes: notes
    })
})


// delete method  /notes/:index
app.delete('/notes/:index', (req, res) => {
    const idx = req.params.index
    delete notes [idx]

    res.status(200).json({
        message: "notes deleted successfully",
    })
})


//patch method  /notes/:index

app.patch('/notes/:index', (req,res) => {
    const idx = req.params.index

    if(!notes[idx]){
        res.status(404).json({
            message: "note not found"
        })
        return
    }
    const description = req.body.description
    const title = req.body.title

    notes[idx].description = description
    notes[idx].title = title

    res.status(200).json ({
        message: "note updated successfully"
    })
})


module.exports = app;

