const express = require("express");
const fortunes = require('./fortunes')
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>HEROKU DEPLOYMENT!!</h1>");
});

server.get("/node-env", (req, res) => {
  res.json({ NODE_ENV: process.env.NODE_ENV });
});

server.get("/fortune", (req, res) => {
 let randomIndex = Math.floor(Math.random() * fortunes.length)
 res.send(`<h1>${fortunes[randomIndex]}</h1>`)
  });

module.exports = server;
