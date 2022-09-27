const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.puxarTodasPessoas);
router.get('/pessoas/:id', PessoaController.puxarUmaPessoa);
router.post('/pessoas', PessoaController.criarPessoa);
router.put('/pessoas', PessoaController.atualizarPessoa);

module.exports = router;