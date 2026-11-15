const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db is connected");
    } catch (err) {
        console.error("db connection error: ", err);
    }
}

module.exports = connectDB;