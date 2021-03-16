const express = require("express");
const mongoose = require("mongoose");

//https://www.npmjs.com/package/morgan - Morgan Information

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// Server connects to 1. Local Mongo Database, OR 2. Atlas Link
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/html")(app);
require('./routes/api')(app)

app.listen(PORT, () => {
  console.log('App running on port' + PORT);
});

