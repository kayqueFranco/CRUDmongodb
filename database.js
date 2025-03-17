/**
 * Módulo de conexão com o banco de dados
 * Uso do framework mongoose
 */

// importação de mongoose
const mongoose = require('mongoose')

// configuração de acesso ao banco de dados
// ip/link - autenticação
//obs: Atlhas(obter via compass) 
// Para criar um banco de dados personalizado basta escolher um nome no final da String da url(ex:dbclientes)
const url = 'mongodb+srv://admin:123Senac@projetonode.r7wat.mongodb.net/dbclientes'

// Criar uma variavel de apoio para aliação
let conectado = false

// método para cnectar o banco de dados 
// async execultar a função de forma assicrona
const conectar = async () =>{
    //validação(se não tiver conectado, conectar)
    if(!conectado) {
        // Conectar com o banco de dados
        // try catch - tratamento de exceções
        try {
            await mongoose.connect(url)//conectar
            conectado = true //setar a variavel
            console.log("MongoDB conectado")
        } catch (error) {
            // Se o código de erro = 8000 (autenticação)
            console.log(error)
            if(error.code = 8000) {
                console.log("Erro de autenticação")
            }
            else{
                console.log(error)
            }
        }
    }
}


// método para desconectar o banco de dados 
// async execultar a função de forma assicrona
const desconectar = async () =>{
    //validação(se não tiver conectado, desconectar)
    if(conectado) {
        // desconectar com o banco de dados
        // try catch - tratamento de exceções
        try {
            await mongoose.disconnect(url)//desconectar
            conectado = false//setar a variavel
            console.log("MongoDB desconectado")
        } catch (error) {
            console.log(error)
        }
    }
}



// exportar para main os método conectar e desconectar
module.exports = {conectar,desconectar}