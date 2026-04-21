import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute: (to : string | string[]) => Promise<boolean>;

}


export class SendEmailLogs implements SendLogEmailUseCase {
    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository,
    ) {}
        async execute(to: string | string[]) {
            try {
               const send = await this.emailService.SendEmailWithFileSystemLogs(to);
               if(!send) {
                throw new Error("Failed to send email with logs");
               }
               const log = new LogEntity({
                    level: LogSeverityLevel.high,
                    message: `Failed to send email logs to ${to}`,
                    origin: 'SendEmailLogsUseCase',
                    createdAt: new Date(),
                });
                this.logRepository.saveLogs(log);

            } catch (error) {
                const log = new LogEntity({
                    level: LogSeverityLevel.high,
                    message: `Failed to send email logs to ${to}`,
                    origin: 'SendEmailLogsUseCase',
                    createdAt: new Date(),
                });
                this.logRepository.saveLogs(log);
                return false;
            }
            
            return true;
        }

}