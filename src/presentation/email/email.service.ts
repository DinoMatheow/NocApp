import  nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";

interface SendEmailOptions {
    to: string;
    subject: string;
    htmlBody: string;

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
        const { to, subject, htmlBody } = options;

        try {   
            const sendInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
            });

            console.log("Email sent: ", sendInformation);

            return true;
        } catch (error) {
            


            return false;
        }


    }
}