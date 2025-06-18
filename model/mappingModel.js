const sequelize = require('../util/db');
const { DataTypes } = require('sequelize');

const mapping = sequelize.define("Mapping", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = mapping;
