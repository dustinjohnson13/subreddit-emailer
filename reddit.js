const nodemailer = require('nodemailer');

class Reddit {
    constructor() {
    }

    newPost(postJSON, callback) {

        const email = process.env.EMAIL;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: email,
            to: email,
            subject: JSON.parse(postJSON).title,
            text: postJSON
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                callback(error);
            } else {
                console.log('Email sent: ' + info.response);
                callback();
            }
        });
    }
}

module.exports = Reddit;