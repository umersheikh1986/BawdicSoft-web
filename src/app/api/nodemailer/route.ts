import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    // host: "smtp.forwardemail.net",
    // port: 465,
    // secure: true,
    service:"gmail",
    auth: {
      user: "ali4282271@gmail.com",
      pass: "ztwd zzbv qeqr skvn",
    },
  });
 
