import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60,//amount of time that items are gonna last before being evicted
      max: 1000,//number of itmes that can be cashed at once 
      isGlobal:true
    })
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass:CacheInterceptor
    }
  ],
})
export class AppModule {}
