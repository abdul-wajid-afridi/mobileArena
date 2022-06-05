const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const db = require("../config/Db");
// const User = require("../models/userModel");

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public

const loginUser = (req, res) => {
  const { email, password } = req.body;
  // res.send(email + password);
  if (!email)
    return res.send({ status: "error", msg: "email required!" + email });
  if (!password)
    return res.send({ status: "error", msg: "password required!" });
  db.query(
    `SELECT * FROM user WHERE email='${email}' AND password='${password}'`,
    (err, user) => {
      // err
      //   ? res.json({
      //       status: "error",
      //       msg: "Invalid Useremail & Password",
      //     })
      //   : res.json({
      //       _id: user.map((i) => i._id).join(),
      //       name: user.map((i) => i.name).join(),
      //       email: user.map((i) => i.email).join(),
      //       token: generateToken(user),
      //       // user: user.map((i) => i.name).join(),
      //     });
      err
        ? console.log(err)
        : user.map((db) => {
            if (db.email == email && db.password == password) {
              res.json({
                token: generateToken(db.id),
              });
            } else {
              res.json({
                message: "wrong data",
              });
            }
          });
    }
  );
};

// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Check for user email
//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid credentials");
//   }
// });

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: "30d",
  });
};

module.exports = {
  loginUser,
  // userLogin,
  getMe,
};
