import { Component, OnInit } from '@angular/core';
import {OntologycataloginformationService} from 'src/app/services/ontologycataloginformation.service';

@Component({
  selector: 'app-databasepersontop',
  templateUrl: './databasepersontop.component.html',
  styleUrls: ['./databasepersontop.component.css']
})
export class DatabasepersontopComponent implements OnInit {

databaseperson: any;
catalogname: string;
   purposecls = 'dataset:PurposePerson';
   conceptcls = 'dataset:ConceptPerson';

  constructor(private ontologyservice: OntologycataloginformationService) { }

  ngOnInit(): void {
	    this.catalogname = 'dataset:DatabasePerson';
	       this.ontologyservice
                .getCatalogObject(this.catalogname)
                .subscribe({next: response => {
                       this.databaseperson = response['dataset:simpcatobj'];
						const d = response['dataset:simpcatobj'];
                        }});

  }
onTrigger(): void {
	alert(JSON.stringify(this.databaseperson['dataset:descr-person']));
}
update($event) {
	alert("change Top");
	this.databaseperson = $event;
}
}
