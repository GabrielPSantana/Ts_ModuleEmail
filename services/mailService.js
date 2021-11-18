const nodemailer = require('nodemailer');
const creds = require('../config/credential');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

module.exports = (email, subject, template) =>{
    const smtp = nodemailer.createTransport({
        host:"smtp.office365.com",
        port:587,
        secure:false,
        auth:{
            user: creds.USER,
            pass: creds.PASS
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    smtp.use('compile',hbs({
        viewEngine:{
            partialsDir:"template path",
            defaultLayout:""
        },
        viewPath:"views/templates",
        extName:'.handlebars',
    
    }));

    const mail = {
        from: 'Gabriel <gabriel_pinheiro02@outlook.com>',
        to: email,
        subject: subject,
        template: template
    }


    return new Promise((resolve, reject)=>{
        smtp.sendMail(mail)
            .then(response => {
                smtp.close();
                return resolve(response);
            })
            .catch(error =>{
                smtp.close();
                return reject(error);
            })
    })

}
