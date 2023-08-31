const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

// add listeners
myEmitter.on('event', (...data) => {
  console.log('an event occurred!', data);
});

// add the listeners and auto remove it after its first emit
myEmitter.once('eventOnce', (data) => {
    console.log("an event once occured!", data);
})

// to remove listener : off()

// trigger events
myEmitter.emit('event', 1);
myEmitter.emit('event', 2, 3, 4);
myEmitter.emit('event');
myEmitter.emit('eventOnce', 1, 2);
myEmitter.emit('eventOnce', 1 ,2 ,3);
