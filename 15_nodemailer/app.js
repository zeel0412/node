const nodemailer = require("nodemailer");

async function sendMail() {
    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth:{
        user:"gosaliyazeel2311@gmail.com",
        pass: "iput tvle hdqo kifx"
        } 
    });

    const mailOptions = {
        from:"gosaliyazeel2311@gmail.com",
        to:"vyasjay776@gmail.com",
        subject: "Noode.js Email Test",
        text: "Hello Email sent using Nodemailer",
        html:"<h2>Hello</h2><p>Email sent using Nodemailer</p>"
    };

    const info = await transpoter.sendMail(mailOptions);

    console.log("Email Sent:", info.response);
}

sendMail();