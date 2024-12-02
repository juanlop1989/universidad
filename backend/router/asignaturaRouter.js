const express = require('express')
const asignaturaController= require('../controller/AsignaturaController')


const router = express.Router();

router.get('/',asignaturaController.getAsignatura)
router.post('/',asignaturaController.postAsignatura)
router.put('/:idasignatura',asignaturaController.putAsignatura)
router.delete('/:idasignatura',asignaturaController.deleteAsignatura)


module.exports=router;