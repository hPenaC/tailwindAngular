import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  sayHello(){
    alert('Hello World');
  }
}