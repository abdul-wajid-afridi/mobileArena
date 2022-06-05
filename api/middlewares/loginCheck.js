var jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(401).send({ status: "error", msg: "Token is required!" });
  }
  const token = req.headers["authorization"].split(" ");

  try {
    req.token = await jwt.verify(
      token[1],
      "81923809183918392183903890138921038920389203890238912183209"
    );
  } catch (e) {
    return res.status(401).send({ status: "error", msg: "Invalid Token" });
  }

  next();
};
