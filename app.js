const express = require('express');
const {Sequelize}=require('sequelize')
require('dotenv').config();
const app = express();

app.use(express.json());
const db=require('./util/db')


app.use('/api/auth', require('./routes/userRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/mappings', require('./routes/mappingRoutes'));

const user = require('./model/userModel');
const doctor=require('./model/doctorModel')
const patient=require('./model/patientModel')
const mapping=require('./model/mappingModel')

user.hasMany(patient, { foreignKey: 'userId', onDelete: 'CASCADE' });
patient.belongsTo(user, { foreignKey: 'userId' });

patient.hasMany(mapping, { foreignKey: 'patientId', onDelete: 'CASCADE' });
mapping.belongsTo(patient, { foreignKey: 'patientId' });

doctor.hasMany(mapping, { foreignKey: 'doctorId', onDelete: 'CASCADE' });
mapping.belongsTo(doctor, { foreignKey: 'doctorId' });

db.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
