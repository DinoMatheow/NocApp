import { LogModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/dataSources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";



export class MongoLogDataSource implements LogDataSource {
     async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const  logs = await LogModel.find({
            level: serverityLevel
        });
        return logs.map(mongoLog => LogEntity.fromObject(mongoLog) );
    }
    async saveLogs(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        console.log('Mongo Log created');
    }
}