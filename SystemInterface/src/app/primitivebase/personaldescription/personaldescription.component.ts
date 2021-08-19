import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personaldescription',
  templateUrl: './personaldescription.component.html',
  styleUrls: ['./personaldescription.component.css']
})
export class PersonaldescriptionComponent implements OnInit {

  constructor() { }

  @Input() person: Observable<any>;

  ngOnInit(): void {
  }

}
