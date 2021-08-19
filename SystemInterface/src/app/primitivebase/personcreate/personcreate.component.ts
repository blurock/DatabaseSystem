import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-personcreate',
  templateUrl: './personcreate.component.html',
  styleUrls: ['./personcreate.component.css']
})
export class PersoncreateComponent implements OnInit {

  constructor() { }

  @Input() persondescription: Observable<any>;

  ngOnInit(): void {
  }

}
