var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var myPort = 3000 || process.env.PORT;

var users = [
  {"name" : "Davidino",
  "age" : 43},
  {"name" : "CaptainCam",
  "age" : 22},
  {"name" : "Razki",
  "age" : 69}
]

//app user things
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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

app.post("/users", function(req, res, next) {
  users.push({'name' : req.body.name, 'age' : req.body.age});
  res.redirect("/users");
});




//begin server
app.listen(myPort, function() {
  console.log(`Your app is ready and listening on port ${myPort}`);
});
