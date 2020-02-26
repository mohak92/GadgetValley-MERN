const mailer = require('nodemailer')
require('dotenv').config();

const getEmailData = (to, name, token, template) => {
    let data = null;

    switch (template) {
        case "welcome":
            data = {
                from: "Steven <sj2858593@gmail.com>",
                to,
                subject: `Welcome to Gagdet Valley ${name}`,
                html: "<b>Welcome!<b>"
            }
            break;
        default:
            data;
    }

    return data;

}

const sendEmail = (to, name, token, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "sj2858593@gmail.com",
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to, name, token, type)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);

        } else {
            console.log('email sent')
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }