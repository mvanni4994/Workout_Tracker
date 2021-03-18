
const Workout = require("../models/workout");
const router = require("express").Router();

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts);
      }
    });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
      console.log(body)
    Workout.findByIdAndUpdate(
        {_id: params.id}, 
        {$push:{exercises: body}}, 
        { new: true, runValidators: true }
    ).then(Workout.findById(req.params.id))
    .catch(err => console.log(err))
  });
  
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data=> res.json(data))
    .catch(err => console.log(err))
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((newWorkout) => {
      res.json(newWorkout);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
     Workout.aggregate().sort({
          _id: -1
      }).limit(7).then((pastWorkout) => {
        res.json(pastWorkout);
    })
    })
}