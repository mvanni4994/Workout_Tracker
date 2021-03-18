const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
},

    type: {
        type: String,
        required: [true, "Enter targeted muscle group"]
    },
    name: {
         type: String,
         required: [true,"Enter name of workout"]
    },
    duration: {
        type: Number,
        required: [true, "Enter duration of workout"]
    },
    weight: {
        type: Number,
        required: [true,"Enter weight lifted"]
    },
    reps: {
        type: Number,
        required: [true,"How many reps did you do???"]
    },
    sets: {
        type: Number,
        required: [true,"How many sets did you do?"]
    },
    distance: {
        type: Number,
        required: [true,"How far did you run?"]
    }
},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  } 
);

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
