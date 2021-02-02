
const Logger = require("./logger")
const logger = new Logger();

logger.log("message");


logger.on('messageLogger', (args) => {
    console.log('Listener event called',args)
})


