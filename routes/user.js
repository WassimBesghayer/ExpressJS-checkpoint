const express = require("express");
const userlist = require("../allUsers");
const userRouter = express.Router();    // routing function is ready to be applyed now

// get user
userRouter.get("/user", (req, res) => res.send("I am a user"));
userRouter.get("/db", (req, res) => res.send({allUsers:userlist}))

userRouter.get("/store", (req, res) => {
    let date = new Date();
    let hours = date.getHours();
    hours>8 && hours<18 ? res.render("open") : res.render("closed");
})
// add user
userRouter.post("/user", (req, res) => {
    let email=req.body.email;
    let password=req.body.password;
    res.send(`My name is ${email} and my password is ${password}`)
})

// update user



// delete user

module.import = userlist;
module.exports = userRouter;    // exporting this , to server.js (the main program)