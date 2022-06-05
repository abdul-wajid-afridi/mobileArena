var jwt = require("jsonwebtoken");
const db = require("./config/Db");

module.exports = (req, res) => {
  const { name, password } = req.body;
  if (!name) return res.send({ status: "error", msg: "Username required!" });
  if (!password)
    return res.send({ status: "error", msg: "Password required!" });

  db.query(
    `SELECT * FROM user_login WHERE name='${name}' AND password='${password}' LIMIT 1`,
    (err, result) => {
      if (err)
        return res.send({
          status: "error",
          msg: "Invalid Username & Password",
        });

      var token = jwt.sign(
        { id: result[0].id },
        "81923809183918392183903890138921038920389203890238912183209"
      );

      return res.send({
        status: "success",
        msg: "Login succesfully",
        data: {
          token: token,
        },
      });

      //   return res.send(result);

      //   console.log(result);
    }
  );

  //   var token = jwt.sign(
  //     userDetail,
  //     "81923809183918392183903890138921038920389203890238912183209"
  //   );

  //   return res.send({
  //     status: "success",
  //     msg: "Login succesfully",
  //     data: {
  //       token: token,
  //     },
  //   });
};
