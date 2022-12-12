// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");

// Import the express module
const express = require("express");

// Instantiate an Express application
const app = express();

cors = require('cors'),
mongoose = require('mongoose'),
md5 = require('md5'),
database = require('./database'),
bodyParser = require('body-parser');


// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());


app.use( function (req, res, next) {
  // console.log(req.body)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Accept, Origin, Content-Type, x-access-token, x-json, x-prototype-version, X-Requested-With, Authorization");
  next();
})


// API
const apiRoutes = require('./routes')

app.use('/api', apiRoutes)

// Create port
const port = process.env.PORT || 3000;

// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
			key: fs.readFileSync("./ssl/server.key"),
			cert: fs.readFileSync("./ssl/server.crt"),
    },
    app
  )
  .listen(port, ()=>{
    console.log('Connected to port ' + port)
  });

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});