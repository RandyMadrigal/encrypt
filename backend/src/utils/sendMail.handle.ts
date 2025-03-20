import "dotenv/config";
import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import { create } from "express-handlebars";

interface ExtendedMailOptions extends nodemailer.SendMailOptions {
  template?: string;
  context?: any;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 587,
  auth: {
    user: process.env.USER_TRANSPORTER as string,
    pass: process.env.PASS_TRANSPORTER as string,
  },
  tls: {
    rejectUnauthorized: false, //no SSL
  },
});

const hbsOptions = {
  viewEngine: create({
    extname: ".hbs",
    partialsDir: path.resolve("src/utils/mails/templates/"),
    layoutsDir: path.resolve("src/utils/mails/templates/"),
    defaultLayout: false,
  }),
  viewPath: path.resolve("src/utils/mails/templates/"),
  extName: ".hbs",
};

transporter.use("compile", hbs(hbsOptions));

export const sendMail = async (
  to: string,
  name: string,
  template: string,
  userName?: string
) => {
  try {
    const mailOptions: ExtendedMailOptions = {
      from: `"encrypt-webApp 👻" <${process.env.USER_TRANSPORTER} >`,
      to: `${to}`,
      subject: "encrypt-webApp 👻",
      template: template,
      context: { name, userName },
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};
