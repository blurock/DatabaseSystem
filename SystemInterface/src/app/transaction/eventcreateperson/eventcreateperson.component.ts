import { Component, OnInit} from '@angular/core';
import {OntologycataloginformationService} from 'src/app/services/ontologycataloginformation.service';

@Component({
    selector: 'app-eventcreateperson',
    templateUrl: './eventcreateperson.component.html',
    styleUrls: ['./eventcreateperson.component.css']
})
export class EventcreatepersonComponent implements OnInit {

    catalogname: string;

    persondescription: any;

    constructor(private ontologyservice: OntologycataloginformationService) {
    }

    getCatalogObject(): void  {
       alert(this.catalogname);
       this.ontologyservice
                .getCatalogObject(this.catalogname)
                .subscribe({next: response => {

                       this.persondescription = response['dataset:simpcatobj'];
                        }});
    }

    ngOnInit(): void {
       this.catalogname = 'dataset:ActivityCatalogDatabasePersonCreation';
       this.getCatalogObject();
    }


    onTrigger(): void {
        alert(JSON.stringify(this.persondescription));
       const classname = 'dataset:DatabasePerson';
		alert(classname);
       this.ontologyservice
               .fillCatalogObject(classname,this.persondescription)
                .subscribe({next: response => {
                       const personinfo = response['dataset:simpcatobj'];
                        this.firestoreCatalogID(personinfo);
                        }
                 });
               
     }
	firestoreCatalogID(personinfo: any) {
		this.ontologyservice.computeFirestoreCatalogID(personinfo)
							.subscribe({next: response => {
								this.firestoreWrite(personinfo,response['dataset:simpcatobj']);
								}});
	}
	firestoreWrite(personalinfo: any, firestoreid: any) {
        alert(personalinfo);
        alert(firestoreid);
        this.ontologyservice.writeFirestoreCatalogObject(personalinfo, firestoreid)
							.subscribe({next: response => {
								alert(JSON.stringify(response));
								}});
		
	}
}
