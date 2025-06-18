const sequelize = require('../util/db');
const { DataTypes } = require('sequelize');

const patient = sequelize.define("Patient", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,         
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  disease: DataTypes.STRING
});

module.exports = patient;
