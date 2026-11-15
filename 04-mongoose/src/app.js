const express = require('express');
const app = express();
const noteModel = require("./models/note.module")

app.use(express.json());


app.post("/notes", async (req, res) => {
    const data = req.body /*object ke form mei {title, description} */
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "note created"
    })
})

app.get("/notes", async (req, res) => {

    // noteModel --> note related koi kaam krna h toh
    //noteModel.find() ---> db mei jitne bhi notes h unko fetch krke dega
    //find() --> humesa array return krega
    const notes = await noteModel.find()
    res.status(200).json({
        message: "notes fetched!",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "note deleted!"
    })

})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id: id }, { title: title }, { description: description })

    res.status(200).json({
        message: "note updated!"
    })
})

module.exports = app;

/*
API create
POST --> /notes --> create note
GET --> /notes --> get all notes
GET --> /notes/:id --> get single note
PUT --> /notes/:id --> update note
DELETE --> /notes/:id --> delete note
PATCH --> /notes/:id --> update note
*/


/*
const notes = await noteModel.findOne({
        "title": "first note prt 2"
    })
        findOne() --> humesa single object return krega jisko hum search krna chahte hain.
        ye humesa object dega ya fir null values

const notes = await noteModel.find({
        "title": "first note prt 2"
    })        

  find() --> woh saare ko return krega jisko hum search krna chahte hain.  
  YE HUMESA array of object dega ya fir empty array dega agr koi object nhi mila toh
*/