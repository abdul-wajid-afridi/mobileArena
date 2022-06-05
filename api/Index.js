const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/Db");
const multer = require("multer");
const path = require("path");
const protect = require("./middlewares/authMiddleware");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  // return res.send("asdfasdfsdfsfa");
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/", require("./routes/ProductsRoutes"));
app.use("/", require("./routes/ReviewsRoute"));
app.use("/", require("./routes/DashboardRoutes"));
app.use("/", require("./routes/CommentsRoute"));
app.use("/", require("./routes/HeartRoutes"));

app.get("/ubama", (req, res) => {
  res.send("show me all ubama users");
});
app.get("/biden", (req, res) => {
  res.send("bidden is protectded");
});
// app.use(
//   "/dashboard",
//   [require("./middlewars/loginCheck")],
//   require("./routes/DashboardRoutes")
// );

const port = 5000;

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
});

// app.post("/login", require("./login"));

app.use("/profile", express.static("upload/images"));

app.post("/api/products", upload.single("profile"), (req, res) => {
  const profile_url = `http://localhost:5000/profile/${req.file.filename}`;
  const { name, company, price, memory, color, link, description } = req.body;
  db.query(
    `INSERT INTO products(image,name,company,price,memory,color,link,description) VALUE(?,?,?,?,?,?,?,?)`,
    [profile_url, name, company, price, memory, color, link, description],
    (err) => {
      err ? console.log(err) : console.log("data inserted");
    }
  );

  //   res.json({
  //     success: 1,
  //     profile_url: `http://localhost:4000/profile/${req.file.filename}`,
  //   });
});

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use(errHandler);

app.listen(port, () => console.log(`backend runs on port ${port}`));
