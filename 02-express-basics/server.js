//server ko start krne ke liye app se
const app = require("./src/app")

// yaha prr ek callback h ()=>{} function h joh tb excute hota h jb server start ho jaata h --> automatically callback start hota h jb server shuru hogya.
app.listen(3000, ()=>{
    console.log("server is running at port 3000");
}) 