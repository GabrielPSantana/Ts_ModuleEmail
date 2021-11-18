const path = require('path');
const express = require('express');
const app = express();
const mailController = require('./routes/MailController');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('cors')());
app.use(express.json());

app.use('/', mailController);

app.listen(8000, ()=>{
    console.log('server start');
})
