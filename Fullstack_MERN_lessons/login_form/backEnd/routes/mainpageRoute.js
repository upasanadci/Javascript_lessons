import express from "express";
import { faker } from "@faker-js/faker";
// import products from "../data.js";

import MainPage from "../module/mainpage.js";
let router = express.Router();
router.get("/", async (req, res) => {
  //this is new added code.You have to pass from postman price,name,desc
  //image will be generated byitself from faker
  const data = await MainPage.create({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    image: faker.image.avatar(),
  });
  data.save();
  //This code we were using priviously with faker api
  // const newData = [];
  // for (let i = 0; i < 10; i++) {
  //   var fakee = new Fakedata({
  //     firstName: faker.person.firstName(),
  //     job: faker.person.jobTitle(),
  //     jobType: faker.person.jobType(),
  //     image: faker.internet.avatar(),
  //   });
  //   fakee.save();
  //   newData.push(fakee);
  // }

  res.json(data);
});

export default router;
