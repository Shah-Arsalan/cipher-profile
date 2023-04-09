const express = require('express');
const { SocialModel } = require('../../models/socials.model');

const SocialRouter = express.Router();

SocialRouter.get("/",async(req,res)=>{
    const email = req.query.email
    const data = await SocialModel.findOne({email})  
     res.send(data)


})

SocialRouter.post("/edit",async(req,res)=>{
    const {facebook, linkedin, twitter, github, website, instagram, email} = req.body;

    const data = await SocialModel.findOne({email})
    if(data){
        await SocialModel.findOneAndUpdate({email},{
            linkedin: linkedin,
            github: github,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            website: website
        })
        res.status(201).send("Social details update successfully")

    }else{
        await SocialModel.create({email, linkedin, facebook, github, instagram, website, twitter})
        res.status(201).send("Social details added successfully")
    }



})

module.exports = {
    SocialRouter
}
