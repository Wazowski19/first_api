import express from 'express';
import {
    getEmpleados,
    postEmpleados,
    updateEmpleadoById,
    getEmpleadoById,
    deleteEmpleadoById 
} from '../controllers/empleado.Controller.js'

const router = express.Router();

/* 
    get (consulta)      /empleados / empleados/:id
    post (crear)        /empleados
    put (actualizar)    /empleados /:id
    delete (borrar)     /empleados /:id

*/

router.route('/empleados').get(getEmpleados).post(postEmpleados);

router.route('/empleados/:id').put(updateEmpleadoById).get(getEmpleadoById).delete(deleteEmpleadoById);


export default router;



