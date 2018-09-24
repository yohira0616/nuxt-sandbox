var express = require('express');
var router = express.Router();

const Task = require('../models/tasks')

/* GET home page. */
router.get('/', function (req, res, next) {
  Task.findAll().then((tasks)=>{
    console.log(tasks)
    console.log(tasks[0].id)
    console.log(tasks[0].name)
  })

  res.render('index', {title: 'Express'});
});

module.exports = router;
