const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
},

exercises: [{
    name: {
        type: String,
        require: true,
        trim: true,
    },
    type: {type: String},
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
}],

},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  } 
);

//REFERENCE HERE 
//https://mongoosejs.com/docs/2.7.x/docs/virtuals.html

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
