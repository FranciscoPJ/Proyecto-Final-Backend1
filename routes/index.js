const express = require("express")
const router = express.Router()
const {indexController, allPeliculas, vistaDePelicula, buscador, crearPelicula, editarPelicula, eliminarPelicula, peliculasPass, consultaAxios,} = require("../controller/controller")
const { validar } = require("../middleware/validarid")
const {check} = require("express-validator")


//get
router.get('/', indexController)
router.get('/ver', allPeliculas)
router.get('/ver/:id', validar, vistaDePelicula)
router.get('/buscar/:name', buscador)
router.get('/pass', peliculasPass)
router.get('/axios', consultaAxios)

//post
router.post('/crear', [
    check("name").not().isEmpty().withMessage("se tiene que cargar un nombre"),
    check("year").not().isEmpty().withMessage("se tiene que cargar un año"),
    check("cost").not().isEmpty().withMessage("se tiene que cargar un costo"),
    check("gender").not().isEmpty().withMessage("se tiene que cargar un genero"),
    check("director").not().isEmpty().withMessage("se tiener que cargar un director"),
    check("language").not().isEmpty().withMessage("se tiene que cargar un idioma"),
    check("stock").not().isEmpty().withMessage("se tiene que cargar si esta el stock")
], crearPelicula)

//put
router.put('/editar/:id', validar, [
    check("name").not().isEmpty().withMessage("se tiene que cargar un nombre"),
    check("year").not().isEmpty().withMessage("se tiene que cargar un año"),
    check("cost").not().isEmpty().withMessage("se tiene que cargar un costo"),
    check("gender").not().isEmpty().withMessage("se tiene que cargar un genero"),
    check("director").not().isEmpty().withMessage("se tiener que cargar un director"),
    check("language").not().isEmpty().withMessage("se tiene que cargar un idioma"),
    check("stock").not().isEmpty().withMessage("se tiene que cargar si esta el stock")
], editarPelicula)

//delete
router.delete('/eliminar/:id', validar, eliminarPelicula)

module.exports = router 