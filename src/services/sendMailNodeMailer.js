const nodemailer = require('nodemailer');

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

module.exports = async (cc, to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: EMAIL_SENDER,
                pass: EMAIL_PASSWORD
            }
        })
    
        const email = {
            from: EMAIL_SENDER,
            to,
            cc,
            subject,
            html
        }
    
        await transporter.sendMail(email, (err, result) => {
            if (err) {
                // throw {
                //     code: 401,
                //     message: err
                // }
                console.log('erro de envio', err);
            }
        })
    } catch (error) {
        console.war(
            'NODEMAILER MAIL ERROR',
            (error.stack || error.message || error)
        );
    }
}