import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StandardserviceService } from './standardservice.service';
import { ServiceConstants } from './service.constants';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class OntologycataloginformationService {
   errorMsg: string;
   headers: HttpHeaders;

   constructor(private http: HttpClient,
      private base: StandardserviceService,
      private services: ServiceConstants) { }

   getCatalogObject(catalogname: string): Observable<any> {
      const body = {
         service: 'DatasetCreateObjectTemplate',
         'dataset:objectype': catalogname
      };
      return this.base.standardHttpPost(body);
 }
   getSimpleClassifications(classification: string): Observable<any>  {
      const body = {
          service: 'DatasetCreateClassificationList',
          'dataset:classificationcomponent': classification
      };
      return this.base.standardHttpPost(body);
   }
   getClassificationTree(classification: string): Observable<any>  {
      const body = {
          service: 'DatasetCreateClassificationTree',
          'dataset:classificationcomponent': classification
      };
      return this.base.standardHttpPost(body);
   }
}
