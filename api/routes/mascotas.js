import express from "express";

const router = express.Router();

router.route('/mascotas')
.post((req, res) =>{
    //TODO: Aqui se crearia la mascota en db
    return res.json({
        msg: 'Mascota creada exitosamente',
        body: req.body
    })
})



export default router;