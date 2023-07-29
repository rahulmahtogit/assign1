const express = require("express");
const router = express.Router();
const Users = require("../model/user");
const bcrypt = require("bcryptjs");
const userAuth = require("../auth/user")



router.post("/login", async (req,res)=>{
   const user = await Users.findOne({
      email: req.body.email
    });
    if (!user) {
      return res.status(200).send({
        message: "Email not found",
        success: false,
      });
    }
    const isMatch = await bcrypt.compareSync(req.body.password, user.password)
    if (!isMatch) {
      return res.status(200).send({success:false,message:"Password is invalid!!"})
    
    }
    const token = await user.generateAdminToken()
    return res.status(200).send({user:{_id:user._id, preferColor: user.preferColor},token,  success:true,message:"Login Successfully"})
})



router.get("/getColor",userAuth, async (req,res)=>{
   const user = req.user
    res.status(200).send({user,success:true,message:"Data get Successfully"})
})

router.post("/changeColor",userAuth, async (req,res)=>{
   const user = req.user
    user.preferColor = req.body.preferColor
    await user.save()
    res.status(200).send({user})
})

router.post("/logout",userAuth, async (req,res)=>{
  const user = await Users.findOne({ _id: req.user._id });
    let tokens = user.tokens;
    if (tokens.length) {
      tokens = tokens.filter((token) => token.token !== req.token);
    }
    user.tokens = tokens;
    await user.save();
    return res
      .status(200)
      .send({ success: true, message: "User loggeed out successfully" });
})



module.exports = router;