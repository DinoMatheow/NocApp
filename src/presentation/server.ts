import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron-services/cron-service";


export class Server {
    public static start() {
        console.log("Server is starting...");

      
        CronService.createJob(
            '*/5 * * * * *',
            () => { 
                new CheckService(
                    () => console.log("Success callback executed."),
                    (error) => console.log(`Error callback executed with error: ${error}`)
                ).execute("https://www.google.com");
            }
        );


    }
}