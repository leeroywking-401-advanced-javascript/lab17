
'use strict';

const writer = require('./app.js')
const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {})


client.on('data', function(data){
    let payload = JSON.parse(data);
    console.log(payload);
    writer('./test.txt',payload)
  })
  
  client.on('close', function(){
    console.log('connection closed')
  })