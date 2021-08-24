import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactlocationinformation',
  templateUrl: './contactlocationinformation.component.html',
  styleUrls: ['./contactlocationinformation.component.css']
})
export class ContactlocationinformationComponent implements OnInit {

  @Input() contactLocation: Observable<any>;

  constructor() { }

  ngOnInit(): void {

  }

}
