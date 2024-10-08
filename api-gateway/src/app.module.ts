import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SharedRabbitMQModule } from 'shared-rabbitmq-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SharedRabbitMQModule],
})
export class AppModule {}
