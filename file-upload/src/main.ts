import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { FileUploadModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(FileUploadModule);
    const config = app.get<ConfigService>(ConfigService);
    app.enableCors({
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    await app.listen(config.get('PORT'), config.get('HOSTNAME'));
    console.log(`file-upload started on port ${config.get('PORT')}`);
  } catch (error) {
    console.error('Error file-upload:', error);
  }
}

bootstrap();
