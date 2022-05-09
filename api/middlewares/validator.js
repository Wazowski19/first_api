import Joi from "joi";

const schema = Joi.object({
    tipo: Joi.string().required(),
    edad: Joi.number().integer(),
    raza: Joi.string(),
    mascota_id: Joi.number().integer().required(),
    nombre: Joi.string(),
    owner_id: Joi.number().integer().required()
});

const validar = async (req, res, next) =>{
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            status: 'ERROR',
            msg: 'Falló la validación del body',
        });
    }
}


export default validar;