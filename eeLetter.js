const Eventemitter = require('events');

const ee = new Eventemitter; 

ee.on('letter', letter => {
  console.log(`RECIEVED:${letter}`);
});

('hi there we are emitting events').split('').filter(character => character !== '').forEach(letter => ee.emit('letter', letter));

