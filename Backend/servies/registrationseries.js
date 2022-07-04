'use strict';
const nodemailer = require('nodemailer');

function sendmail(receiveremailid, subjectline, emailbody) {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.googlemail.com', // Gmail Host
            port: 465, // Port
            secure: true, // this is true as port is 465
            auth: {
                user: 'pardhuvuppala123', //Gmail username
                pass: 'kpwhskhhcpcpzayq' // Gmail App password
            }
        });

        let mailOptions = {
            from: 'PROJECT SITE12333',
            to: receiveremailid, // Recepient email address. Multiple emails can send separated by commas
            subject: subjectline,
            text: emailbody
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });

}

module.exports.sendmail = sendmail;