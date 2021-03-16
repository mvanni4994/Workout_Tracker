const router = require("express").Router();
const workout = require("../models/fitness.js");

// https://mongoosejs.com/docs/models.html - Mongoose Information


router.post("./api", ({ body }, res) => {
  workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("./api", ({ body }, res) => {
  workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("./api", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;