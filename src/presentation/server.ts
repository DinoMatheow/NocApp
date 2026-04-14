import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repository/log.repositoryImp";
import { CronService } from "./cron-services/cron-service";


const fileSystemLogRepository =  new LogRepositoryImpl(
    new FileSystemDataSource()
);


export class Server {
    public static start() {
        console.log("Server is starting...");

      
        CronService.createJob(
            '*/5 * * * * *',
            () => { 
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log("Success callback executed."),
                    (error) => console.log(`Error callback executed with error: ${error}`)
                ).execute("https://www.google.com");
            }
        );


    }
}