import { IMailProvider, IMessage } from "../IMailProvider";

import nodemailer from 'nodemailer';

import Mail from "nodemailer/lib/mailer";

export class MailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })
    }

    public async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.address
            },
            from: {
                name: message.to.name,
                address: message.to.address
            },
            subject: message.subject,
            html: message.body
        })
    }

}
