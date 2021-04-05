
const Workout = require("../models/workout");

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
  
  app.post("/api/workouts", ({body}, res) => {
    console.log("hello");
    console.log(body);
    Workout.create(body)
    .then(data=> res.json(data))
    .catch(err => console.log(err))
  });

  app.get("/api/workouts/range", (req, res) => {
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
       params.id,
      //  validates workout.js
      {$push:{exercises:body} },
    ).then(Workout.findById(params.id))
    .catch(err => console.log(err))
  });
}