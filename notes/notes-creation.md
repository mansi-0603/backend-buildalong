notes = {
title: "my notes",
description: "notes description"
}

notes ---> array of obj banega

const notes = {
{
title1: "my notes",
description1: "notes description"
},
{
title2: "my notes",
description2: "notes description"
},
{
title3: "my notes",
description3: "notes description"
},
{
title4: "my notes",
description4: "notes description"
}
}


res.status(201).json({
     message: "notes created successfully!"
})
jb koi resource succesfully create hota h toh hume ek response bhejna hoga postman ko woh message ke form mei hota h JSON format mei ....

jb bhi kch chiz create hota h toh woh ek resource hoti h


// delete method  /notes/:index
app.delete('/notes/:index', (req, res) => {

})

/notes/ --> static h ---> isko humlog routes ke andr param consider krte h
:index  --> dynamic



localhost:3000/notes/0  ---> ismei index = 0

notes humara array ke form mei h toh 0-indexing h toh delete hote jayega waise 

jb get ke through hum kch send krenge toh woh index ki jagah null show hoga hume.
