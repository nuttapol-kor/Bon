const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dbConfig = require("./database/db");
const path = require('path')

const bonRoute = require("./routes/bon.route");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log(`Could not connect to database: ${error}`);
    }
  );

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/bons", bonRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  })
}

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
