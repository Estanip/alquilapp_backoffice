import dotenv from 'dotenv';
import path from 'path';
import { IConfig } from './config.interfaces';
import { ValidateConfig } from './config.validator';
dotenv.config({ path: path.resolve('../../.env'), encoding: 'utf8' });

const { PORT } = process.env;
const config: IConfig = { port: PORT || 3000 };

export default ValidateConfig(config);
