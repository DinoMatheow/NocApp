import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceInterface {
    execute(url: string): Promise<boolean>;
}


type SuccessCallback = () => void;
type ErrorCallback = (error: String) => void;


export class CheckService implements CheckServiceInterface {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback

    ){
    }

    async execute( url :string):Promise<boolean> {
        try {
        const  req = await fetch(url);
        if (!req.ok) {throw new Error(`HTTP error! status: ${req.status}`); 
        }
        const log = new LogEntity(` Server ${url} is up and running`, LogSeverityLevel.low);
        this.logRepository.saveLogs(log);
        this.successCallback();
        return true;
        } catch (error) {

            const errorMessage = `${error}`;
            const log = new LogEntity(` Server ${url} is down. Error: ${errorMessage}`, LogSeverityLevel.low);
            this.logRepository.saveLogs(log);


            this.errorCallback(errorMessage );
            return false;
        }
        
    }

};