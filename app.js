var express = require("express");
var app = express();

var myPort = 3000 || process.env.PORT;

var users = [
  {"name" : "Davidino",
  "age" : 43},
  {"name" : "CaptainCam",
  "age" : 22},
  {"name" : "Razki",
  "age" : 69}
]

//routers
app.get("/", function(req, res, next) {
  res.send("default users brav");
});

app.get("/users", function(req, res, next) {
  res.send(users);
});

app.get("/users/:id", function(req, res, next) {
  res.send(users[req.params.id]);
});




//begin server
app.listen(myPort, function() {
  console.log(`Your app is ready and listening on port ${myPort}`);
});
