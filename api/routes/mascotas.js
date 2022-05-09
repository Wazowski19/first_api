import express from "express";
import mascotaValidator from "../middlewares/validator.js"

const router = express.Router();

router.route('/mascotas')
.post(mascotaValidator,(req, res) =>{
    //TODO: Aqui se crearia la mascota en db
    return res.json({
        msg: 'Mascota creada exitosamente',
        body: req.body
    })
})



export default router;