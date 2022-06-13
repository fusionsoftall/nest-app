import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setupSwagger } from './common/swagger/swagger';
import { LoggingInterceptor } from './Interceptor/logging.interceptor';

const port = process.env.PORT || 8080;
async function bootstrap() {
  const app:NestExpressApplication = await NestFactory.create(AppModule);
  const config:ConfigService=app.get(ConfigService);
  const port:number = config.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({whitelist:true,
  transform:true}));

  setupSwagger(app);

  app.useGlobalInterceptors(new LoggingInterceptor);

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, `Bootstrap`);
}
bootstrap();

