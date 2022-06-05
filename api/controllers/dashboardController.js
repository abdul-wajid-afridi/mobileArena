exports.home = (req, res) => {
  const { id } = req.token;
  return res.send(id);
};
