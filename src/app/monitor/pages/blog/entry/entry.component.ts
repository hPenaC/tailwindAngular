import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  number:string='...'

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.pipe(map(url=>url[0].path)).subscribe((path)=>
      this.number=path
    );
   }

  ngOnInit(): void {
  }

}
