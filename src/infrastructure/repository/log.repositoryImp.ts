import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";


export class LogRepositoryImpl implements LogRepository {

    
    constructor(
        private readonly logDataSource: LogDataSource,

    ) {

    }

    async saveLogs(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLogs(log);
    }
    async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(serverityLevel);
    }



}