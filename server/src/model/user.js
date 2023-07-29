const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../utility/config")

const userSchema = new Schema(
  {
    email: { type: String, maxlength: 50, trim: true },
    preferColor: { type: String, maxlength: 50, default:"default" },
    password: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            trim:true
        }
    }]
  }
  
);

userSchema.methods.generateAdminToken = async function () {
    let user = this;
  const token = jwt.sign(
    { _id: user._id.toString()},
    jwtSecret
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;

}




userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hashSync(user.password, 8)
    }
    next()
})
const Users = mongoose.model("users", userSchema);
module.exports = Users;
