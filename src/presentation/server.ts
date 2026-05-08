import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasources";
import { LogRepositoryImpl } from "../infrastructure/repository/log.repositoryImp";
import { CronService } from "./cron-services/cron-service";
import { EmailService } from "./email/email.service";


const LogRepository =  new LogRepositoryImpl(
    new FileSystemDataSource(),
    // new MongoLogDataSource(),
);


const emailService = new EmailService();
export class Server {
    public static async start() {
        console.log("Server is starting...");


      

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

        // const logs = await LogRepository.getLogs(LogSeverityLevel.high);
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => { 
        //         new CheckService(
        //             LogRepository,
        //             () => console.log("Success callback executed."),
        //             (error) => console.log(`Error callback executed with error: ${error}`)
        //         ).execute("https://www.google.com");
        //     }
        // );


    }
}