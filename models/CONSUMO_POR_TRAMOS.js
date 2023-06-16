const{Schema} = require('mongoose');
const mongoose = require('mongoose');
const consumoPorTramos = new Schema({

    Linea: String,
    Fecha: Date,
    'Residencial [Wh]': Number,
    'Comercial  [Wh]': Number,
    'Industrial  [Wh]': Number
    
});

module.exports= mongoose.model('CONSUMO_POR_TRAMO',consumoPorTramos)