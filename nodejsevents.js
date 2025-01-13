const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', () => {
    console.log("Please turn of the motor!");
    setTimeout(() => {
        console.log("Please turn off the motor! Its a gentel reminder.")
    }, 3000);
});

console.log("The script is running")
myEmitter.emit('Waterfull');
console.log("The script is still running");
