const AsignaturaEstudiante = require('../Modelos/AsignaturaEstudiante');

exports.asignarAsignatura = async (req, res) => {
    try {
        const { idestudiante, idasignatura } = req.body;
        const nuevaAsignacion = await AsignaturaEstudiante.create({ idestudiante, idasignatura });
        res.status(201).json(nuevaAsignacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al asignar asignatura: ' + error });
    }
};

exports.obtenerAsignaciones = async (req, res) => {
    try {
        const asignaciones = await AsignaturaEstudiante.findAll();
        res.status(200).json(asignaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener asignaciones: ' + error });
    }
};
