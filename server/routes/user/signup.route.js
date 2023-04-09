const express = require('express');
const bcrypt = require('bcryptjs');
const { UserModel } = require('../../models/user.model');
const multer = require('multer');
const SignUpRouter = express.Router();



SignUpRouter.get("/user-details",async(req,res)=>{
  let {email} = req.query
  const data = await UserModel.find({email})
  res.send(data)
})

SignUpRouter.put("/user-details/edit",async(req,res)=>{
  let {email,fname,lname,pic,mobile} = req.body
  await UserModel.findOneAndUpdate({email},{
    fname:fname,lname:lname,mobile:mobile,pic:pic
  })
  res.send("User details updated successfully")
})

SignUpRouter.post('/', async (req, res) => {
    try {
        const {fname, lname, mobile, pic,  email, password } = req.body;
        console.log(req.body)
        const present = await UserModel.findOne({ email: email });
        if (present) {
          res.status(403).send({ msg: 'User already exists' });
        } else {
          bcrypt.hash(password, 6, async function (err, hash) {
            if (err) {
              console.log(err);
              res.sendStatus(500).send({ msg: 'Something went wrong' });
            } else {
              const data = new UserModel({fname:fname, lname:lname, mobile:mobile, pic:pic, email: email, password: hash});
              await data.save();
              res.status(201).send({ msg: 'Account created successfully' });
            }
          });
        }
      } catch (err) {
        console.log(err);
        res.sendStatus(500).send({ msg: 'Something went wrong' });
      }
});

module.exports = {
  SignUpRouter,
};
