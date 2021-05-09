require('dotenv').config()

const RECIVER_CC_EMAIL = process.env.RECIVER_CC_EMAIL
let nodemailer = require('nodemailer');

let nodemailerTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: String(process.env.EMAIL),
        pass: String(process.env.APPLICATION_PASSWORD)
    }
});


exports.sendEmail = function (email, subjectLine, slotDetails, callback) {
    let options = {
        from: String('Vaccine Checker ' + process.env.EMAIL),
        to: email,
        cc: RECIVER_CC_EMAIL,
        subject: subjectLine,
        text: 'Vaccine available. Details: \n\n' + slotDetails
    };
    nodemailerTransporter.sendMail(options, (error, info) => {
        if (error) {
            return callback(error);
        }
        callback(error, info);
    });
};
