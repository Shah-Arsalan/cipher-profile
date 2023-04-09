const express = require('express');
const FollowerRoute = express.Router();
const {FollowersModel} = require('../../models/followers.model')
FollowerRoute.get("/", async(req, res)=>{

    res.send("hello followers")
})

FollowerRoute.post("/add", async(req, res)=>{
const {email, name, image, followers} = req.body;
   // res.send("hello followers")
})

module.exports = {
    FollowerRoute
};
