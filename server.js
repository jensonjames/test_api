
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/accbalmodel'), //created model loading here
  bodyParser = require('body-parser');



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:evolvus*123@ds161336.mlab.com:61336/alexadb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello Test API World!'))


var routes = require('./api/routes/accbalroutes'); //importing route
routes(app); //register the route

app.get("/webhook", function (req, res) {
  if (req.query["hub.verify_token"] === "this_is_my_token") {
    console.log("Verified webhook");
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Verification failed. The tokens do not match.");
    res.sendStatus(403);
  }
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
