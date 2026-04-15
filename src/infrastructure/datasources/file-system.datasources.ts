import { log } from "console";
import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';


export class FileSystemDataSource implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';
    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles  =()=> {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }
        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(path => {
            if (!fs.existsSync( path )) return ;
                fs.writeFileSync( path, ' ');
        }); 
            
        
        
        // if (fs.existsSync(this.allLogsPath) ) return ;
        // fs.writeFileSync(this.allLogsPath, ' ') 

    }

    
    async saveLogs(newLog: LogEntity): Promise<void> {
        const logAsJson = `${JSON.stringify(newLog)}\n`;

        fs.appendFileSync( this.allLogsPath, logAsJson );
        if ( newLog.level  === LogSeverityLevel.low ) return;
        if ( newLog.level  === LogSeverityLevel.medium ) {
            fs.appendFileSync( this.mediumLogsPath, logAsJson );
        } else {
            fs.appendFileSync( this.highLogsPath, logAsJson );
        }

    }

    private getLogsFromFile = (path:string): LogEntity[] => {
        const content = fs.readFileSync( path, 'utf-8' );
        const stringLogs = content.split('\n').map( LogEntity.fromJson );
        return stringLogs;
    }

    async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        switch (serverityLevel) {
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.allLogsPath);
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.mediumLogsPath);
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.highLogsPath);
            default:
                throw new Error(`${serverityLevel} not implemented`);

        }
    }



}
