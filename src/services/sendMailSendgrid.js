const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

module.exports = (from, to, subject, html) => {
    try {
        sgMail.setApiKey(SENDGRID_API_KEY);
        sgMail.send({
            to,
            from,
            subject,
            html,
        });

    } catch (error) {
        console.war(
            'SENDGRID MAIL ERROR',
            (error.stack || error.message || error)
        );
    }
}