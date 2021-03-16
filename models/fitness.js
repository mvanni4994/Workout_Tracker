const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
},
    type: {
        type: String,
        required: "Enter targeted muscle group",
    },
    name: {
         type: String,
         required: "Enter name of workout",
    },
    duration: {
        type: Number,
        required: "Enter duration of workout",
    },
    weight: {
        type: Number,
        required: "Enter weight lifted",
    },
    reps: {
        type: Number,
        required: "How many reps did you do???"
    },
    sets: {
        type: Number,
        required: "How many sets did you do?"
    },
    distance: {
        type: Number,
        required: "How far did you run?"
    }
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;