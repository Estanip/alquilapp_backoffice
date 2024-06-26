import { ConflictException } from '@nestjs/common';
import { IConfig } from './config.interfaces';

export const ValidateConfig = (config: IConfig): IConfig => {
  Object.keys(config).forEach((key) => {
    if (!config[key]) throw new ConflictException(`${key} is not defined`);
  });
  return config;
};
