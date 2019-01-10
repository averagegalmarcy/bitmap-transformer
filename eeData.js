const EventEmitter = require('events');

const ee = new EventEmitter;

// const data = { name: 'hello' };

ee.on('we did it with data', data => {
  console.log(data);
});

ee.emit('we did it with data', { name: 'hello' });
