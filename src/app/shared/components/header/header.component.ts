import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }
  private scrollSubscription!:Subscription;
  private isClosed:boolean = true;
  private wasClicked:boolean = false;
  @ViewChild('scroll',{static:true}) scrollBar!:ElementRef;  

  ngAfterViewInit(){
    if(this.scrollSubscription && !this.scrollSubscription.closed){
      this.scrollSubscription.unsubscribe();
    }
    this.scrollSubscription= fromEvent<Event>(document,'scroll')
    .pipe(
      map(this.calcularPorcentajeScroll)      
    )
    .subscribe(
      (res)=>{
        this.scrollBar.nativeElement.style.width=`${res}%`
      }
    );
  }

  public getIsClosed(): boolean {
    return this.isClosed;    
  }

  private calcularPorcentajeScroll(event:any){
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    }=event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight))*100;
  }

  public getClicked(): boolean {
    return this.wasClicked;
  }

  public actionMenu(){
    if(!this.wasClicked){
      this.wasClicked=true;
    }
    this.isClosed=!this.isClosed;
  }

}
