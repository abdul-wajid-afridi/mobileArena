const db = require("../config/Db");

const getRelatedComments = (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT comment_text from comments
    JOIN products
    ON products.id=comments.product_id
    where products.id=${id}
    `,
    (err, data) => {
      err
        ? res.json({
            status: "failed",
            err,
          })
        : res.json({
            status: "success",
            data,
          });
    }
  );
};

const postComments = (req, res) => {
  const id = req.params.id;
  const { comment_text } = req.body;
  db.query(
    "insert into comments(comment_text,product_id) value(?,?)",
    [comment_text, id],
    (err) => {
      err
        ? res.json({ status: err })
        : res.json({
            status: "success",
          });
    }
  );
};

module.exports = { getRelatedComments, postComments };
