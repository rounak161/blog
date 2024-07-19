 

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
////////////
const path=require('path');
///////////
// env config
dotenv.config();

// router import
const authRoutes = require("./routes/authRoutes");
const blogRoutes=require("./routes/blogRoutes")

// mongodb connection
connectDB();

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// simple root route
app.get("/", (req, res) => {
  res.send("API running");
});

// handle favicon.ico requests
app.get("/favicon.ico", (req, res) => res.status(204));

// use routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/auth", blogRoutes);


//static filters

app.use(express.static(path.join(__dirname,'./client/build')));
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

/////////
// Port
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});



 