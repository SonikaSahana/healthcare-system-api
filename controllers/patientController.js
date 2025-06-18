const Patient = require('../model/patientModel');


exports.create = async (req, res) => {
  try {
   const patient = await Patient.create({ ...req.body, userId: req.user.id });
   return  res.status(201).json(patient);

  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
    try{
    const patients = await Patient.findAll({ where: { userId: req.user.id } });
    return res.status(200).json(patients);
    }
    catch (err) {
    return res.status(400).json({ error: err.message });
    }
 
};

exports.getOne = async (req, res) => {
    try{
    const patient = await Patient.findByPk(req.params.id);
    if (!patient){
        return res.status(404).json({ message: 'Not found' });
    } 
    res.json(patient);
    }
    catch (err) {
    return res.status(400).json({ error: err.message });
    }
  
};

exports.update = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Not found' });
  await patient.update(req.body);
  res.json(patient);
};

exports.delete = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Not found' });
  await patient.destroy();
  res.json({ message: 'Deleted successfully' });
};
