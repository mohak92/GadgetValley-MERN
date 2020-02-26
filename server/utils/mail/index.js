const mailer = require('nodemailer');
const { welcome } = require("./welcome_template");
require('dotenv').config();


const getEmailData = (to,name,token,template) =>{
    let data = null;

    switch(template){
        case "welcome":
            data = {
                from: "Gadget Valley <gadget.valley.ru@gmail.com>",
                to,
                subject: `Welcome to Gadget Valley ${name}`,
                html: welcome()
            }
        break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to,name,token,type) => {

    const smtpTransport = mailer.createTransport({
        service:"Gmail",
        auth:{
            user: "gadget.valley.ru@gmail.com",
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to,name,token,type)

    smtpTransport.sendMail(mail,function(error,response){
        if(error){
            console.log(error);
        } else {
            cb()
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }