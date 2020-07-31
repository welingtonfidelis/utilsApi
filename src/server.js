const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();

require('dotenv').config();

//Aceita dados do tipo json
app.use(express.json());

//permite acesso à api de qualquer dominio 
app.use(cors());

//roteamento
app.use('/', require('./routes'));

app.listen(process.env.PORT || port, function () {
    console.log(`Server running in ${port}\n`);
});