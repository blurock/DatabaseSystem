import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-databaseperson',
  templateUrl: './databaseperson.component.html',
  styleUrls: ['./databaseperson.component.css']
})

export class DatabasepersonComponent implements OnInit {

catalogname: string;

   purposecls = 'dataset:PurposePerson';
   conceptcls = 'dataset:ConceptPerson';


 @Input() databaseperson: any;
 @Output() databasepersonChange = new EventEmitter<string>();

    constructor() {
    }

  ngOnInit(): void {

  }

}
