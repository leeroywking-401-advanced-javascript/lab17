'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {});

const events = ['create','foo','read','baz','update','bing','rain','attack','error','bark','error'];

setInterval( () => {
    let event = events[Math.floor(Math.random() * events.length)];
    client.write(`${event} an ${event} just happened! make some kind of note or even a log`);
},500);

client.on('close', function() {
    console.log('Connection Closed');
});