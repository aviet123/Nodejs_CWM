const express = require('express')
const routes = express.Router();


const courses = [
    {id:1,name:"1"},
    {id:2,name:"2"},
    {id:3,name:"3"}
  ]

  
  routes.get('/',(req, res) => {
    res.send(courses)
  });
  
  routes.post('/', (req, res) => {
    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(result.error.details[0].message);
    const course = {
      id: courses.length +1,
      name: req.body.name
    };

    courses.push(course);
    res.send(course);
  })
  

  routes.get('/:id', (req, res) => {
    const isExist = courses.find(c => c.id === parseInt(req.params.id));
    if (!isExist) res.status(404).send('the course with the given ID was not exist');
    res.send(isExist);
  });


  routes.put('/:id', (req, res) => {
    const isExist = courses.find(c => c.id === parseInt(req.params.id));
    if (!isExist) res.status(404).send('the course with the given ID was not exist');

    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(result.error.details[0].message);

    isExist.name = req.body.name
    res.send(isExist);
  });


  routes.delete('/:id', (req, res) => {
    const isExist = courses.find(c => c.id === parseInt(req.params.id));
    if (!isExist) res.status(404).send('the course with the given ID was not exist');

    const index = courses.indexOf(isExist);
    courses.splice(index,1);

    res.send(isExist)
  });


  function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course)
  }

  module.exports = routes;