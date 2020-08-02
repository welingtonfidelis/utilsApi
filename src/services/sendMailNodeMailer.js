const nodemailer = require('nodemailer');

const EMAIL_SENDER = process.env.EMAIL_SENDER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

module.exports = async (from, to, subject, html, cc = '') => {
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
            console.log('Error send mail', err);

            return;
        }
    });
}