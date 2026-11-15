const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/post.routes');

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());


//prefixing the routes with /api/auth
app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)


module.exports = app;