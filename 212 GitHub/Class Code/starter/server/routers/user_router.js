import express from "express";
import user from "../models/user.js";

const router = express.Router();

// router.get("/", (req, res)=>{res.send("Hi")})

router.post("/register", async (req,res)=>{

    // parse data from req.body
    const {email, password} = req.body;

    const newUser = new user({
        email,
        password
    })

    newUser.save().then((result)=>{
        res.status(201).json(result)
    })
    .catch ((err)=>{
        res.status(400).send(err)
    })
})

router.post("/login", async (req,res)=>{
    //parse data
    const {user, password} = req.body;

    //find account
    user.findOne({email: email}).then((find_user_result)=>{
        if(!find_user_result) {
            //send an error - skip for now
        }
        // compare passwords
        if (find_user_result.password === password){
            res.json({message: "You have logged in"})
        }
        else {
            res.json({message: "password is incorrect"})
        }
    }) .catch()

})

router.get("/search", async (req,res)=>{})

router.put("/profile/:user_id", async (req,res)=>{})

router.delete("/account/:user_id", async (req,res)=>{})


export default router;