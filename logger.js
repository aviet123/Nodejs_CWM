
const EventEmitter = require('events').EventEmitter;

class Logger extends EventEmitter{

     log(message) {
        console.log(message);
        this.emit('messageLogger',"andandsandafasfsaf");
    }
}

module.exports = Logger;
