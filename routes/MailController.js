const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('formulario')
})

router.post('/registration', (req, res) => {

    const email = req.body.email;
    const name = req.body.name;
    const link = req.body.link;
    const subject = 'Confirmação de Cadastro';
    const template = 'hello';

    require('../services/mailService')(email, subject, template)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})

router.post('/recover', (req, res) => {

    const email = 'gabrieldevti@gmail.com';
    
    const name = req.body.name;
    const link = req.body.link;
    const subject = 'Confirmação de Cadastro';
    const template = 'recover'

    require('../services/mailService')(email, subject, template)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})

module.exports = router