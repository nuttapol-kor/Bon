const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const bonSchema = require("../models/Bon");

router.route("/create-bon").post((req, res, next) => {
  bonSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.route("/").get((req, res) => {
  bonSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

router.route("/edit-bon/:id").get((req, res) => {
  bonSchema.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

router.route("/update-bon/:id").put((req, res, next) => {
  bonSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        console.log("Update success");
        res.json(data);
      }
    }
  );
});

router.route("/delete-bon/:id").delete((req, res, next) => {
  bonSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
