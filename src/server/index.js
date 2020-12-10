const express = require("express");

const app = express();
const cors = require("cors");
const http = require("http");
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

var array = [];

app.get("/", (req, res) => {
  return res.send("Server is running");
});

app.get("/contactforms/email", (req, res) => {
  return res.send(array);
});

app.post("/contactforms/email", (req, res) => {
  var email = req.body;
  array.unshift(email);

  return res.send("dog added!");
});

let blogposts = [];

app.get("/add/blog", (req, res) => {
  res.json(blogposts);
});

app.post("/add/blog", (req, res) => {
  const post = req.body;

  blogposts.unshift(post);
});

app.listen(80, () => {
  console.log("Server is listening!");
});
