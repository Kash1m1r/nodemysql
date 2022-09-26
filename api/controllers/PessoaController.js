const database = require('../models')

class PessoaController {
    static async puxarTodasPessoas(req, res){
        try {
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas)
        }catch(error) {
            return res.status(500).json(error.message)
        }
      
    }
}

module.exports = PessoaController