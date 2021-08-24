import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-purposeconcept',
  templateUrl: './purposeconcept.component.html',
  styleUrls: ['./purposeconcept.component.css']
})
export class PurposeconceptComponent implements OnInit {

  purposetitle = 'Purpose';
  concepttitle = 'Concept';

  @Input() purpose: string;
  @Input() purposeclass: string;
  @Input() concept: string;
  @Input() conceptclass: string;
  @Output() purposeChange = new EventEmitter<string>();
  @Output() conceptChange = new EventEmitter<string>();

 purposecls: string

  constructor() { }

  ngOnInit(): void {
  }

}
