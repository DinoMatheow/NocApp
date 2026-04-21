import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repository/log.repositoryImp";
import { CronService } from "./cron-services/cron-service";
import { EmailService } from "./email/email.service";


const fileSystemLogRepository =  new LogRepositoryImpl(
    new FileSystemDataSource()
);


const emailService = new EmailService();
export class Server {
    public static start() {
        console.log("Server is starting...");


        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute(['matheownashe@gmail.com', 'matheownashe@gmail.com']);

        // emailService.SendEmailWithFileSystemLogs(
        //     ['matheownashe@gmail.com', 'matheownashe@gmail.com']
        // );


        // const emailService = new EmailService();
        // emailService.sendEmail({
        //     to: 'matheownashe@gmail.com',
        //     subject: 'Test Email from NocApp',
        //     htmlBody: '<h1>Hello from NocApp!</h1><p>This is a test email sent using Nodemailer.</p>'
        // });


        // console.log(envs.MAILER_USER, envs.MAILER_KEY);


        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => { 
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log("Success callback executed."),
        //             (error) => console.log(`Error callback executed with error: ${error}`)
        //         ).execute("https://www.google.com");
        //     }
        // );


    }
}