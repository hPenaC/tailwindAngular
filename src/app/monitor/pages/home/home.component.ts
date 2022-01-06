import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/core/services/example.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public exampleService: ExampleService) { }

  ngOnInit(): void {
  }

}
