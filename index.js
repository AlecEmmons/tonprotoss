const http = require('http').Server(app);
const market = require('./market');
const devices = require('./devices');
const apps = require('./apps');
const slices = require('./slices');
const services = require('./services');


var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())





'use strict';
 
const getIP = require('external-ip')();
 
getIP((err, ip) => {
    if (err) {
        // every service in the list has failed
        throw err;
    }
    console.log(ip);
});


const port = 3000;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
  	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.get('/api/market', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/api/devices', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/api/apps', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/api/slices', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/api/services', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})



const io = require('socket.io')(http);


setInterval(function () {
  market.updateMarket();
  io.sockets.emit('market', market.marketPositions[0]);
}, 150);

io.on('connection', function (socket) {
  console.log('a user connected');
});


io.origins('*:*') // for latest version



http.listen(port, () => {
  console.log(`Listening on *:${port}`);
});