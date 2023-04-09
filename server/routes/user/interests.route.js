const express = require("express");
const { InterestModel } = require("../../models/interest.model");

const InterestRouter = express.Router();

InterestRouter.get("/", async (req, res) => {
  const email = req.query.email;
  const getData = await InterestModel.findOne({ email });

  res.status(200).send(getData);
});

InterestRouter.post("/create", async (req, res) => {
  const interests = req.body.interests;
  const email = req.body.email;
  const findData = await InterestModel.findOne({ email });
  if (findData) {
    const newData = [...findData.interests];
    interests.forEach(async (ele) => {
      const included = newData.includes(ele);
      if (!included) {
        newData.push(ele);
      } else {
        newData.splice(newData.indexOf(ele), 1);
      }
    });
    await InterestModel.findOneAndUpdate({ email }, { interests: newData });
    res.status(201).send("Interests added successfully");
  } else {
    await InterestModel.create(req.body);
    res.status(201).send("Interests added successfully");
  }
});

module.exports = {
  InterestRouter,
};
