const express = require('express')
const routes = express.Router();
const bcrypt = require('bcrypt');

const auth = require('./services/auth');
const sendMailNodeMailer = require('./services/sendMailNodeMailer');
const sendMailSendgrid = require('./services/sendMailSendgrid');

const saltRounds = 10;

routes.post('/login', async (req, res) => {
    try {
        const { user, password } = req.body;

        const hash = process.env.USER_PASSWORD;
        const userAccount = process.env.USER_ACCOUNT;

        const isValid = await bcrypt.compareSync(password, hash);

        if (user != userAccount || !isValid) {
            throw {
                code: 401,
                message: "Invalid user or password"
            }
        }

        const Authorization = auth.createToken();
        res.send({ Authorization });

    } catch (error) {
        console.error('ERROR!!!', error);
        let code = 500;

        if (error.code) {
            code = error.code;
            delete error.code;
        }

        const message = error.message || error.stack || error.errors || error;

        res.status(code).json({ status: false, message });
    }
})

//Rotas com validação de token
routes.use(auth.verifyJWT);

routes.post('/sendmail/nodemailer', (req, res) => {
    try {
        const { mailTo, message, subject } = req.body;

        sendMailNodeMailer(mailTo, subject, message);

        res.json({ status: true });

    } catch (error) {
        console.error('ERROR!!!', error);
        let code = 500;

        if (error.code) {
            code = error.code;
            delete error.code;
        }

        const message = error.message || error.stack || error.errors || error;

        res.status(code).json({ status: false, message });
    }
});

routes.post('/sendmail/sendgrid', (req, res) => {
    try {
        const { mailFrom, mailTo, message, subject } = req.body;

        sendMailSendgrid(mailFrom, mailTo, subject, message);

        res.json({ status: true });

    } catch (error) {
        console.error('ERROR!!!', error);
        let code = 500;

        if (error.code) {
            code = error.code;
            delete error.code;
        }

        const message = error.message || error.stack || error.errors || error;

        res.status(code).json({ status: false, message });
    }
});

module.exports = routes;