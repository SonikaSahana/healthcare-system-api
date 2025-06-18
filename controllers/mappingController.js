const Doctor = require('../model/doctorModel');
const Mapping =require('../model/mappingModel')


exports.create = async (req, res) => {
  try {
    const mapping = await Mapping.create(req.body);
    res.json(mapping);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const allMappings = await Mapping.findAll();
  res.json(allMappings);
};

exports.getByPatientId = async (req, res) => {
  const allMappings = await Mapping.findAll({
    where: { patientId: req.params.patientId },
    include: [Doctor]
  });
  res.json(allMappings);
};

exports.delete = async (req, res) => {
  const mapping = await Mapping.findByPk(req.params.id);
  if (!mapping) return res.status(404).json({ message: 'Not found' });
  await mapping.destroy();
  res.json({ message: 'Mapping removed successfully' });
};
