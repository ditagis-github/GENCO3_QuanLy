class EmailManager {
    constructor(params) {
        var nodemailer = require('nodemailer');
        this.transporter = nodemailer.createTransport({
            service:'Gmail',
            auth: {
                user: 'fuhi.dev@gmail.com',
                pass: '@Fuhi.dev'
            }
        });
    }
    static create(){
        return new EmailManager();
    }
    send(infos) {
        return new Promise((resolve, reject) => {
            let mailOptions = {
                from: '"Sở Thông Tin và Truyền Thông tỉnh Bình Dương" <sotttt@binhduong.gov.vn>',
                to: infos.to,
                subject: infos.subject,
                text: infos.text || 'Xin cảm ơn.....'
            };
            this.transporter.sendMail(mailOptions, function (error, info) {
                if (error) reject(error);
                else resolve(info)
            });
        });

    }
}
module.exports = EmailManager
// let email = new EmailManager();
// email.send({
//     to:'hatphehat.vn@gmail.com',
//     subject:'test'
// }).then(res=>console.log(res)).catch(err=>console.log(err))