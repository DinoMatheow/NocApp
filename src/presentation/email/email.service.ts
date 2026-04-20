import  nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";

interface SendEmailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachment[]; 

}

interface Attachment {
    filename: string;
    path: string;

}



export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_USER,
            pass: envs.MAILER_KEY
        }
    });


    async sendEmail(options:SendEmailOptions):Promise<boolean>{
        const { to, subject, htmlBody, attachements = [] } = options;

        try {   
            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements

            });

            console.log("Email sent: ", sendInformation);

            return true;
        } catch (error) {
            


            return false;
        }


    }

    SendEmailWithFileSystemLogs( to:string | string[] ){
        const subject = 'Log del server';
        const htmlBody = '<h1>Logs del server</h1><p>Adjunto encontrarás los logs del servidor.</p>';


        const attachements: Attachment[] = [
            {
                filename: 'logs-all.log', path: './logs/logs-all.log'},
            // {filename: 'logs-high.log', path: './logs/logs-error.log'},
            // {filename: 'logs-medium.log', path: './logs/logs-warn.log'}
        ];
        return this.sendEmail({to, subject, htmlBody, attachements});
    }
}