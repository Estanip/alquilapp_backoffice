import { ConfigurationModule } from '@api/config/configuration.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigurationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
