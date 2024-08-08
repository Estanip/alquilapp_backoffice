import { ConflictException } from '@nestjs/common';

export const ValidateConfig = (config) => {
  Object.keys(config).forEach((key) => {
    if (!config[key]) throw new ConflictException(`${key} is not defined`);
  });
  return config;
};
