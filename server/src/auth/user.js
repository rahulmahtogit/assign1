const Users = require("../model/user");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../utility/config");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    
    const decode = jwt.verify(token, jwtSecret);
  
    const user = await Users.findOne(
      {
        _id: decode._id,
        "tokens.token": token,
      },
      { tokens: 0, password: 0 }
    );
  
    if (!user) {
      return res.status(400).send({success:false,meassge:"user Not exist",userExist:false})
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    return res
      .status(401)
      .send({ message: "please authenticate first", error: e });
  }
};

module.exports = auth;
