const {Peliculas} = require("../model/cine")
const validar = async (req, res, next) => {
    const item = await Peliculas.findById(req.params.id)
    if (item !== null) {
        next()
    } else {
        res.status(500).json({msg: "el id es invalido, no existe"})
    }
}

module.exports = {validar}