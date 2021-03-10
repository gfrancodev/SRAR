interface Mail {
    name: string;
    address: string;
}

export interface IMessage {
    to: Mail;
    from: Mail;
    subject: string,
    body: string
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
}