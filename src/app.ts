

import 'dotenv/config';
import { Server } from "./presentation/server";
import { MongoDatabase } from './data/mongo/init';
import { envs } from './config/plugins/envs.plugin';
import { LogModel } from './data/mongo';

(async()=>{

await main();

})();

async function main() {

    await MongoDatabase.connect({
        mongoURL: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

        // const newLog = await LogModel.create({
        //     message:'Test Mongo',
        //     origin: 'App.ts',
        //     level: 'low',
        // });

    // await newLog.save();
    // console.log(newLog);

    const logs = await LogModel.find();
    console.log(logs);


        // Server.start();
    // console.log(envs);
}


