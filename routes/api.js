const router = require("express").Router();
const workout = require("../models/workout");
const express = require("express")
const app = express();
const db = require("../models/workout")

// https://mongoosejs.com/docs/models.html - Mongoose Information
module.exports = function(app) {

  app.get("/api/workout", function(req, res) {
    db.workout.find({})
    .then(function(workout) {
      res.json(workout);
    })
    .catch(err =>{
res.json(err);
    });
  });
}

app.post("/api/workout", async (req, res)=> {
  try {
    const response = await db.Workout.create({type: "workout"})
    res.json(response);
  } 
  catch (err) {
    console.log(err)
  }
})

app.put("/api/workout:id", ({body, params}), res => {
  const workoutID = params.id;
  let savedExercises= [];

  db.workout.find({_id:workoutID}).then(dbworkout => {
    savedExercises=dbworkout[0].exercises;
    res.json(dbworkout[0].exercises);
    let allExercises = [...savedExercises, body]
    console.log(allExercises)
    updateWorkout(allExercises)
  })
  .catch(err => {
    res.json(err);
});

function updateWorkout(exercises){
db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
if(err){
    console.log(err)
}

})
}

})

app.get("/api/workouts/range", (req, res) => {
db.Workout.find({})
.then(workout => {
res.json(workout);
})
.catch(err => {
res.json(err);
});
});