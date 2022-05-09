const getEmpleados = (req, res, next) =>{

    return res.json({
        msg: 'Ruuta de get empleados',
        body: req.body
    })
    //TODO: guardar en base de datos todo el req.body
}
const postEmpleados = () =>{

}
const updateEmpleadoById = () =>{

} 
const getEmpleadoById = (req, res) =>{
    return res.json({
        msg: 'Ruuta de get empleados by id' + req.params.id,
        body: req.body
    })
}
const deleteEmpleadoById = () =>{

}


export {
    getEmpleados,
    postEmpleados,
    updateEmpleadoById,
    getEmpleadoById,
    deleteEmpleadoById 
};