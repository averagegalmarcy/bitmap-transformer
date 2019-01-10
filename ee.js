const Eventemitter = require('events');
const ee = new Eventemitter; 

ee.on('we did it', () => {
  console.log('yes we did');
});
ee.emit('we did it');

