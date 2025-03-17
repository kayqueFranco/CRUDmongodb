/**
 * Modrlo de dados para construção de coleções("Tabelas")
 * Clientes
 */

// inportação de recursos do framework mongoose
const {model , Schema} = require('mongoose')

// Criação da estrutura da coleção clientes
const clientesSchema = new Schema ({
    nomeCliente: { type: String},
    foneCliente: {type: String},
    cpf: {type: String, unique:true, index:true},
    dataCadastro: {type: Date , default: Date.now}

},{versionKey:false}) // não versionar os dados armazenar 

// exporta pala o main o modelo de dados
// obs: Clientes será o nome da coleção 
module.exports = model('Clientes' , clientesSchema)