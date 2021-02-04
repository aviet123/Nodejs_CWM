
const EventEmitter = require('events');

class Logger extends EventEmitter{
    constructor() {
        super();
        this.emit('messageLogger','sadsafasfsafsafasf')
    }
}

module.exports = Logger;
