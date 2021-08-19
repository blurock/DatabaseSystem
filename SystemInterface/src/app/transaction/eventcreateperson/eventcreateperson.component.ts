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
     }
}
