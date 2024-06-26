import dotenv from 'dotenv';
import { IConfig } from './config.interfaces';
import { ValidateConfig } from './config.validator';
import path from 'path';

dotenv.config({ path: path.resolve('.env'), encoding: 'utf8' });
console.log(process.env.PORT);

const { PORT } = process.env;

const config: IConfig = { port: PORT };

export default ValidateConfig(config);
