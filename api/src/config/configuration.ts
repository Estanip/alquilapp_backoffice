import dotenv from 'dotenv';
import path from 'path';
import { IConfig } from './config.interfaces';
import { ValidateConfig } from './config.validator';
dotenv.config({ path: path.resolve('../../.env') });

const { PORT, ENV } = process.env;
const config: IConfig = { port: PORT || 3000, environment: ENV };

export default () => ValidateConfig(config);
