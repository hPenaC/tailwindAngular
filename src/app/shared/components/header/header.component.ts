import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  private isClosed:boolean = true;
  private wasClicked:boolean = false;

  ngOnInit(): void {
  }

  public getIsClosed(): boolean {
    return this.isClosed;    
  }

  public getClicked(): boolean {
    return this.wasClicked;
  }

  public actionMenu(){
    if(!this.wasClicked){
      this.wasClicked=true;
    }
    this.isClosed=!this.isClosed;
    console.log(this.getIsClosed()&&this.getClicked());
    console.log(this.getIsClosed());
  }

}
