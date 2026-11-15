const express = require('express');

//server create
const app = express(); // app ke andr express ko call krne joh return ho rha h woh store ho rha h basically woh ek instances hota h

//user agr request kre toh send hoga hello server !
app.get("/", (req,res) => {
    res.send("Hello Server !");
})

app.get("/about", (req,res) => {
    res.send("About page !");
})

//agr reques about page prr hoga toh send kya hoga -- conatct page
app.get("/contact", (req,res) => {
    res.send("Contact page !");
})

//server start krne ke liye
app.listen(3000); //ye number uska port number h jaha prr server start hoga