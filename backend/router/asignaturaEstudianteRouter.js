const express = require('express');
const controller = require('../controller/AsignaturaEstudianteController');

const router = express.Router();

router.post('/', controller.asignarAsignatura);
router.get('/', controller.obtenerAsignaciones);

module.exports = router;
