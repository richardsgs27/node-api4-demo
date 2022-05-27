const express = require('express');
const fortunes = require('./fortunes');
const Stuff = require('./stuff-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>HEROKU DEPLOYMENT!!</h1>');
});

server.get('/node-env', (req, res) => {
    res.json({ NODE_ENV: process.env.NODE_ENV });
});

server.get('/fortune', (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    res.send(`<h1>${fortunes[randomIndex]}</h1>`);
});

server.get('/my-env', (req, res) => {
    res.json(process.env.MESSAGE);
});


server.get('/stuff', (req, res) => {
    Stuff.getAll()
        .then(result => {
            res.json(result);
        });
});

server.get('/stuff/:index', (req, res) => {
    Stuff.getByIndex(req.params.index)
        .then(result => {
            if(result == null) {
                res.status(404).json({ message: 'not found' });
                return;
            }
            res.json(result);
        });
});

server.post('/stuff', (req, res) => {
    Stuff.add(req.body)
        .then(result => {
            res.status(201).json(result);
        });
});


module.exports = server;