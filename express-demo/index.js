const config = require('config');
const express = require('express');
const app = express();
const Joi = require('joi');
const logger = require('./logger')
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const morgan = require('morgan')
const courses = require('./routes/courses')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/api/courses',courses)

console.log("Application name: " + config.get('name'));
console.log("Mail server name: " + config.get('mail.host'));

dbDebugger('database connecting')
if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  startupDebugger('Morgan enable.....')
}



app.use(logger)

const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`listening to port ${port}`));