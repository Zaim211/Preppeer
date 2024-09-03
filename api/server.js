const router = require("./routes/index");
const express = require("express");
const cors = require("cors");
const path = require('path');
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
    origin: true,
    credentials: true,
}));

app.options('*', cors())

// Route to serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Route to serve robots.txt
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});


app.use('/uploads', express.static(__dirname+'/uploads'));
// middleware to load routes
app.use('/', router);


app.listen(process.env.API_PORT, () => {
    console.log("Server started");
});

module.exports = app;
