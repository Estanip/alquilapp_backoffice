import { ConfigurationService } from '@api/config/configuration.service';
import { AppModule } from '@api/modules/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigurationService);
  const port = configService.port;

  await app.listen(port, () => Logger.log(`🚀 Application is running on: http://localhost:${port}`));
}

bootstrap();
