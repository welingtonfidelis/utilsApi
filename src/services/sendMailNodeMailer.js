const nodemailer = require('nodemailer');

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_PASSWORD = process.env.EMAIL_SENDER;

module.exports = (to, subject, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: EMAIL_SENDER,
                pass: EMAIL_PASSWORD
            }
        })
    
        const email = {
            from: EMAIL_SENDER,
            to,
            subject,
            html
        }
    
        transporter.sendMail(email, (err, result) => {
            if (err) {
                throw {
                    code: 401,
                    message: err
                }
            }
        })
    } catch (error) {
        console.war(
            'NODEMAILER MAIL ERROR',
            (error.stack || error.message || error)
        );
    }
}