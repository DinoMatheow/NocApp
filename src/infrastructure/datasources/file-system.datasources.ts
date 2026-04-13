import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';


export class FileSystemDataSource implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-low.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';
    constructor() {

    }

    private createLogFilePath =()=> {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }

    }

    
    saveLogs(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }



}
