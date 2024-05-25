// import { MailAdapter, SendMailData } from "../mail-adapter";
// import nodemailer from 'nodemailer';

// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "1bb2e901d3f91b",
//       pass: "461847c2216d3e"
//     }
//   });

// export class NodemailerMailAdapter implements MailAdapter {
//     async sendMail({subject, body}: SendMailData) {
//         await transport.sendMail({
//             from: 'Equipe Feedget <oi@feedget.com>',
//             to: 'Bruna Moura <brunninhademoura@gmail.com>',
//             subject,
//             html: body,
//         })
//     }
// }