const express = require('express')
const routes = express.Router();

const auth = require('./services/auth');
const sendMailNodeMailer = require('./services/sendMailNodeMailer');
const sendMailSendgrid = require('./services/sendMailSendgrid');

routes.use(auth.verifyJWT)

routes.post('/sendmail/nodemailer', (req, res) => {
    try {
        const { mailTo, message, subject } = req.body;

        sendMailNodeMailer(mailTo, subject, message);
    
        res.send({ status: true });

    } catch (error) {
        console.error('ERROR!!!', error);
        let code = 500;

        if (error.code) {
            code = error.code;
            delete error.code;
        }

        const message = error.message || error.stack || error.errors || error;

        res.send(code).send({status: false, message });
    }
});

routes.post('/sendmail/sendgrid', (req, res) => {
    try {
        const { mailFrom, mailTo, message, subject } = req.body;

        sendMailSendgrid(mailFrom, mailTo, subject, message);
    
        res.send({ status: true });

    } catch (error) {
        console.error('ERROR!!!', error);
        let code = 500;

        if (error.code) {
            code = error.code;
            delete error.code;
        }

        const message = error.message || error.stack || error.errors || error;

        res.send(code).send({status: false, message });
    }
});

module.exports = routes;