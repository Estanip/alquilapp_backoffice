import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService = new ConfigService()) {}

  get environment() {
    return this.configService.get<string>('env');
  }

  get port() {
    return this.configService.get<string>('port');
  }
}
