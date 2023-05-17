

const express = require("express")

const userRouter =  express.Router()

const {UserModel} = require("../models/users.model.js")


userRouter.post("/post",async(req,res)=>{

    const {image_url,name,age,flat,gender,tower} = req.body

    const user =  await new UserModel({ image_url,name,age,gender,flat,tower})
    await user.save()
    res.status(201).send("user added sucessfully")
})


userRouter.get("/user",async(req,res)=>{

    const user = await UserModel.find()
    res.send(user)
})

userRouter.delete("/delete/:id",async(req,res)=>{

    let userId = req.params.id

    await UserModel.findByIdAndDelete({ _id: userId})

        res.send("USER deleted sucessfully")

})

module.exports = {userRouter}

