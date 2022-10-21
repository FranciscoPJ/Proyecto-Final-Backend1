const {Peliculas} = require("../model/cine")
const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs")
const axios = require("axios")

const indexController = (req, res) => {
    res.send('Peliculas')
}

const allPeliculas = async (req, res) => {
    const item = await Peliculas.find()
    res.status(200).json({ item })
}

const vistaDePelicula = async (req, res) =>{
    const item = await Peliculas.findById(req.params.id)
    res.status(200).json({item})
}

const buscador = async (req, res) =>{
    const item = await Peliculas.findOne({director: req.params.director})
    res.status(200).json({item})
}

const crearPelicula = async (req, res) =>{
    try{
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Peliculas(req.body)
            await item.save()
            res.status(201).json({item})   
        } else {
           res.status(501).json(err) 
        }
} catch (error) {
    res.status(501).json({error})
}
}

const editarPelicula = async (req, res) =>{
    try{
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Peliculas.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({mesg: "se actualiazo"})
        } else {
           res.status(501).json(err) 
        }
} catch (error) {
    res.status(501).json({error})
}
}

const eliminarPelicula = async(req, res) => {
    item = await Peliculas.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: "la pelicula elegida se elimino correctamente", item})
}

const peliculasPass = async (req, res) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(req.body.pass, salt)
    let comparacion = bcrypt.compareSync(req.body.pass, hash)
    let comparacion2 = bcrypt.compareSync("a23497sdf", hash)
    res.json({hash, comparacion, comparacion2})
}

const consultaAxios = async (req, res) => {
    try {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/" + req.params.buscador)
        res.status(200).json({status: respuesta.status, data: respuesta.data})
    } catch (error) {
        res.status(501).json({status: error.response.status, data: error.response.data})
    }
}

module.exports = {indexController, allPeliculas, vistaDePelicula, buscador, crearPelicula, editarPelicula, eliminarPelicula, peliculasPass, consultaAxios}