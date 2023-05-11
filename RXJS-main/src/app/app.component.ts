import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, scan, Subscriber, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // ngOnInit(): void {
  //   // fromEvent(document, 'click')
  //   //   .pipe(
  //   //     throttleTime(1000),
  //   //     map((event: any) => event.clientX),
  //   //     scan((count, clientX) => count + 1, 0)
  //   //   )
  //   //   .subscribe((count) => console.log(count + 1));


  //   // fromEvent(document, 'click')
  //   //   .pipe(scan((count) => count + 1, 0))
  //   //   .subscribe((count) => console.log(`Clicked ${count} times`));



  //     fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  // }
  date:any;


  ngOnInit(): void {


    let observable = new Observable((producer)=>{
      // producer.next("rushi");
      setInterval(()=>{
        producer.next(new Date());
      },1000);
    })

    let subscriber = observable.subscribe(
      {
        next(result:any){
          console.log(result);
        },
        error(err){

        },
        complete(){

        }
      });

      setTimeout(()=>{
      subscriber.unsubscribe();
      }, 5000);

      observable.subscribe((result:any)=>{
        this.date = result;
      })

  }





}
