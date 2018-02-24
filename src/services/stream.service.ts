import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import set = Reflect.set;
@Injectable()
export class StreamService {
  dataStream :Observable<string>;

  dataStream2:Observable<number>;
  constructor() { }


  createStream(){
    this.dataStream = new Observable(observer => {
      setTimeout(()=> {
        observer.next("vale1")
        observer.next("valu1")
      },1000);

      setTimeout(() =>{
        observer.next("value2")
      },3000 );

      setTimeout(()=> {
        observer.next("value3")
      },5000);

      setTimeout(()=> {
        observer.next("value4");
      },7000)
    })
    return this.dataStream;
  }

  createNumberStream(){
    this.dataStream2 = new Observable((observer) => {
      setTimeout(()=> {
        observer.next(8);
      },10  )    ;
      setTimeout(()=> {
        observer.error("waaaaaaaaw");
      },1000);
      observer.next(1);
      setTimeout(()=> {
        observer.complete();
      },2000);

      setTimeout(()=> {
        observer.next(9);
      },1000);
    })
   return this.dataStream2
  }


}
