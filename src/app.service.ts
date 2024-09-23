import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER)
   private readonly cacheManager:Cache
   ){}

  async get() {
    await this.cacheManager.set('cached_item', {key: 32}, 100);
    //here we are passing a key and a vale to the cache, the value can be a string, a primitive type, buy in this case we are passing an object and we can also give it options, in this case we are giving it a 100 milisecond ttl  
   
    // await this.cacheManager.del('cached_item'); //deletes especific element
   //await this.cacheManager.reset();  //deletes the whole cache 

    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem)
    return cachedItem;
  }
}
