import { LogEntity, LogSeverityLevel } from "../entities/log.entity";



export abstract class logRepository {

    abstract saveLogs(log: LogEntity): Promise<void>;
    abstract getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]>;


}