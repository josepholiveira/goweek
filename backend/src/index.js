const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
    "mongodb://joseph:joseph123@ds161039.mlab.com:61039/goweek-backend", 
    {
    useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000 :)');
});

