/**
 * Processo principal
 * Estudo do banco de dados MongoDB (CRUD)
 * @author Kayque Franco
 */

// importação do modulo de conexão 
const {conectar , desconectar} = require('./database.js')

// importação do modelo de dados do cliente
const clienteModel = require('./src/Models/Clientes.js')

// função para cadastrar um novo cliente
// Atenção! para trabalhar com  banco de dados usar sempre
//async - await e try-catch
const salvarCliente = async(nomeCli,foneCli,cpfCli )=>{
    try {
        //setar  a estrutura de dados com os valores 
        //obs: usar os mesmo nomes da estrutra
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli 
        })
        // a linha  salva os dados no banco de dados
        await novoCliente.save()
            console.log("CLiente adicionado com sucesso")
        
    } catch (error) {
        console.log(error)
    }
}

// =========================================================
const iniciarsistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("------------------------------------")
    await conectar()
    //CRUD Creáte (inserção no banco de dados)
    await salvarCliente("leona", "354873369", "65854223699")
    await desconectar()
}

iniciarsistema()