const mongoose = require('mongoose');

//notes ki schema kaise create krte h  ---> iske andr title & description hogi
const notesSchema = new mongoose.Schema({

    // joh store krna h uska structure define krte h schema ke through --> type define krte h ki title & description dono string type ke h

    // data: data_type
    title: String,
    description: String

})

//agr database mei CRUD operation krna h related to notes table then we need to create model of notes table
const noteModel = mongoose.model("notes", notesSchema)

module.exports = noteModel




/*
CRUD operation ka mtlb hota h ki humlog database mei data ko create, read, update & delete kr skte h

Create --> data ko create krna --> POST
Read --> data ko read krna --> GET
Update --> data ko update krna --> PUT/Patch
Delete --> data ko delete krna --> DELETE
*/
