require('dotenv').config();

const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();

const URL_FRONT = process.env.URL_FRONT;
const corsOptions = {
    origin: URL_FRONT,
    optionsSuccessStatus: 200
}

//Aceita dados do tipo json
app.use(express.json());

//aplicação de cors
// corsOptions
app.use(cors());

//roteamento
app.use('/', require('./routes'));

app.listen(process.env.PORT || port, function () {
    console.log(`Server running in ${port}\n`);
});