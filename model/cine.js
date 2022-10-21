const mongoose =  require("mongoose")

const  Schema = mongoose.Schema
const schema = new Schema({
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        cost: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        stock: {
            type: String,
            required: Boolean
        }    
})

const Peliculas = mongoose.model('Peliculas', schema)
module.exports = {Peliculas}