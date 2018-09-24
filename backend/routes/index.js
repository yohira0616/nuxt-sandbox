var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize('test_database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  });

  const Task = sequelize.define('tasks', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    description: Sequelize.STRING
  }, {
    timestamps: false
  });

  sequelize.sync()
    .then(() => Task.create({
      name: 'test',
      description: 'test_description'
    }))
    .then(task => {
      console.log(task.toJSON());
    });

  res.render('index', {title: 'Express'});
});

module.exports = router;
