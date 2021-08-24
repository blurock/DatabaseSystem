import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-datadescriptionperson',
  templateUrl: './datadescriptionperson.component.html',
  styleUrls: ['./datadescriptionperson.component.css']
})
export class DatadescriptionpersonComponent implements OnInit {

  constructor() { }

   purposecls = 'dataset:PurposePerson';
   conceptcls = 'dataset:ConceptPerson';

   @Input() descriptionperson: any;
   @Output() descriptionpersonChange = new EventEmitter<string>();

  ngOnInit(): void {
  }


}
