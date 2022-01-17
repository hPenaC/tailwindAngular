import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() { 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });      
 }

}
