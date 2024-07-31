const router = require("./routes/index");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });


// middleware to parse incoming requests and convert the body to json except for the webhook
app.use((req, res, next) => {
    if (req.originalUrl === '/api/payment/webhook') {
      next();
    } else {
      express.json()(req, res, next);
    }
  }
);
// middleware to parse cookies
app.use(cookieParser());

// middleware to load environment variables
require("dotenv").config();

// middleware to connect with frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


app.use('/uploads', express.static(__dirname+'/uploads'));
// middleware to load routes
app.use('/', router);


app.listen(process.env.API_PORT, () => {
    console.log("Server started");
});

module.exports = app;