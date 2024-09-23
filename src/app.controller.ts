import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

//@UseInterceptors(CacheInterceptor) //it triggers a cache response for the code so that it doesn't have to go back to the code everytime the request is made 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('route')
  @CacheTTL(60)
  async get() {
    return this.appService.get();
  }
}
