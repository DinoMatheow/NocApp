import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT:  env.get('PORT').required().asPortNumber(),
    MAILER_USER: env.get('MAILER_USER').required().asEmailString(),
    MAILER_KEY: env.get('MAILER_KEY').required().asString(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').required().asString(),
    PROD: env.get('PROD').required().asBool(),
} 