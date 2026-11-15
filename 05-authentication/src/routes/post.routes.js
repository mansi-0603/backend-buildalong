const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

const router = express.Router();


router.post("/create", (req, res) => {

    //sbse hle check kro token h ki nhi

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    //verify your token 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //decoded = ke andr woh user ki id and IAT-- means kb token c=toen create hua h uska time h
        console.log(decoded)

        const user = userModel.findOne({
            _id: decoded.id
        })
        console.log(user)
        
    } catch (err) {
        return res.status(401).json({
            message: "token is invalid"
        })
    }

    res.send("dummy post created successfully")
})


module.exports = router;