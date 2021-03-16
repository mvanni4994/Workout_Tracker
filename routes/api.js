const db = require("../models/workout");
const Workout = require('../models/workout')

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
      console.log(body)
    db.Workout.findByIdAndUpdate(
        {_id: params.id}, 
        {$push:{exercises: body}}, 
        { new: true, runValidators: true }
    ).then(data => res.json(data))
    .catch(err => console.log(err))
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then((newWorkout) => {
      res.json(newWorkout);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
      db.Workout.aggregate().sort({
          _id: -1
      }).limit(7).then((pastWorkout) => {
        res.json(pastWorkout);
    })
    })
};