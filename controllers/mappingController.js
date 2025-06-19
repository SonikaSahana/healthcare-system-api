const Doctor = require('../model/doctorModel');
const Mapping = require('../model/mappingModel');
const Patient = require('../model/patientModel'); 


exports.create = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;

    const patient = await Patient.findOne({
      where: { id: patientId, userId: req.user.id }
    });

    if (!patient) {
      return res.status(403).json({ msg: "You don't own this patient" });
    }
    const existing = await Mapping.findOne({
      where: { patientId, doctorId }
    });

    if (existing) {
      return res.status(409).json({ msg: 'Doctor already assigned to this patient' });
    }

    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json(mapping);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const allMappings = await Mapping.findAll({
      include: [Doctor, Patient]
    });
    res.json(allMappings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getByPatientId = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({
      where: { patientId: req.params.patientId },
      include: [Doctor]
    });
    res.json(mappings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.delete = async (req, res) => {
  try {
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping) return res.status(404).json({ message: 'Not found' });
    await mapping.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
