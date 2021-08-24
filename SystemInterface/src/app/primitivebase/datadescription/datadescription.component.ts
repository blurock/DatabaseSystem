import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datadescription',
  templateUrl: './datadescription.component.html',
  styleUrls: ['./datadescription.component.css']
})
export class DatadescriptionComponent implements OnInit {

  titletitle = 'Title';
  abstracttitle = 'Abstract';
  titleplace = 'One line description';
  abstractplace = 'More description (paragraph)';
  purposetitle = 'Purpose';
  concepttitle = 'Concept';

 @Input() title: string;
 @Input() abstract: string;
 @Input() purpose: string;
 @Input() purposeclass: string;
 @Input() concept: string;
 @Input() conceptclass: string;
 @Input() keywords: any;
 @Output() purposeChange = new EventEmitter<string>();
 @Output() conceptChange = new EventEmitter<string>();
 @Output() titleChange = new EventEmitter<string>();
 @Output() abstractChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


updateTitle(value){
    this.title = value;
    this.titleChange.emit(value);
  }
updateAbstract(value){
    this.abstract = value;
    this.abstractChange.emit(value);
  }
updatePurpose($event) {
	this.purpose = $event;
	this.purposeChange.emit($event);
}
updateConcept($event) {
	this.concept = $event;
	this.conceptChange.emit($event);
}
}
