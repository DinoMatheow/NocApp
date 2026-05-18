

import 'dotenv/config';
import { Server } from "./presentation/server";
import { MongoDataBase } from './data/mongo/init';
import { envs } from './config/plugins/envs.plugin';
import { LogModel } from './data/mongo/models/log.model';

(async()=>{

await main();

})();

async function main() {

    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

        const newLog = await LogModel.create({
            message:'Test Mongo',
            origin: 'App.ts',
            level: 'low',
        });

    // await newLog.save();
    // console.log(newLog);

    const logs = await LogModel.find();
    console.log(logs);


        // Server.start();
    // console.log(envs);
}


