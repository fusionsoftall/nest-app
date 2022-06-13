import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { Console } from 'console';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SubController } from './sub/sub.controller';

const envFilePath:string = getEnvPath(`src/common/envs`);

console.log(`test ${__dirname}`);
@Module({
  imports: [LoginModule, ConfigModule.forRoot({envFilePath, isGlobal:true}),



  TypeOrmModule.forRootAsync({useClass:TypeOrmConfigService}),


  ],
  controllers: [SubController, AppController],
  providers: [AppService],
  
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    //.exclude('login')
    .forRoutes('login');
  }
}



