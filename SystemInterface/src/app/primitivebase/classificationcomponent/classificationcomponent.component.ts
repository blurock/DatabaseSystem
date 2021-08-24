import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {OntologycataloginformationService} from 'src/app/services/ontologycataloginformation.service';


@Component({
  selector: 'app-classificationcomponent',
  templateUrl: './classificationcomponent.component.html',
  styleUrls: ['./classificationcomponent.component.css']
})
export class ClassificationcomponentComponent    implements OnInit {

    @Input() selected: string;
    @Input() classificationname: string;
    @Input() classtitle: string;
    @Output() selectedChange = new EventEmitter<string>();

    classifications: any;
    constructor(private ontologyservice: OntologycataloginformationService) {
        }

   ngOnInit(): void {
       this.getClassifications();
 }

   getClassifications(): void {
     this.ontologyservice.getSimpleClassifications(this.classificationname)
       .subscribe({next: response => {
           const catobj: any = response['dataset:simpcatobj'];
           this.classifications = catobj['dataset:classificationelement'];
           if (this.selected.startsWith('Unassigned')) {
             const choice = this.classifications[0];
             this.selected = choice['dc:type'];
             this.selectedChange.emit(this.selected);
           }}});
      }

   onSelectValueChange(): void {
        this.selectedChange.emit(this.selected);
      }

}
