const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

module.exports = async (from, to, subject, html, cc = '') => {
    try {
        sgMail.setApiKey(SENDGRID_API_KEY);
        await sgMail.send({
            to,
            from,
            cc,
            subject,
            html,
        });

    } catch (error) {
        console.warn(
            'SENDGRID MAIL ERROR',
            (error.stack || error.message || error)
        );
    }
}