// iss mei humlog logic likhte h ki kaise database se connect karna h aur kaise data ko fetch karna h ya save karna h

const mongoose = require("mongoose");

//ye function server ko db se connect krega
async function connectDB(){
    // await function ka mtlb jb mongoose.connect humara server ko connect nhi krta h database se tb tk wait kro
    await mongoose.connect("mongodb+srv://yt_backend_db:%403pa3UfAnJT2.q7@cluster0.e7jnmk9.mongodb.net/john")

    //jaise db humara server s connect hogya print this
    console.log("connected to db");

}

module.exports = connectDB