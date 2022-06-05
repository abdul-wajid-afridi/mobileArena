const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");

const User = require("../config/Db");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      // process.env.JWT_SECRET
      const decoded = jwt.verify(token, "secret");

      // Get user from the token
      // req.user = await User.findById(decoded.id).select("-password");
      console.log(decoded);
      req.user = await User.query(
        `SELECT * FROM user WHERE id='${decoded.id}'`,
        (err, result) => {
          err ? console.log(err) : result;
        }
      );
      // console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      console.log("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    console.log("Not authorized, no token");
  }
});

module.exports = protect;

// module.exports = { protect };
