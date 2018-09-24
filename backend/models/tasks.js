const Sequelize = require('sequelize');

const sequelize = require('../sequelize_connection')

const Task = sequelize.define('tasks', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: Sequelize.STRING,
  description: Sequelize.STRING
}, {
  timestamps: false
});
module.exports= Task
