import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT:  env.get('PORT').required().asPortNumber(),
    MAILER_USER: env.get('MAILER_USER').required().asEmailString(),
    MAILER_KEY: env.get('MAILER_KEY').required().asString(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
    PROD: env.get('PROD').required().asBool(),



    MONGO_URL: env.get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
    MONGO_USERNAME: env.get('MONGO_USERNAME').required().asString(),
    MONGO_PASSWORD: env.get('MONGO_PASSWORD').required().asString(),
} 