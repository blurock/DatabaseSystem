import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandardserviceService {
  errorMsg: string;
  headers: HttpHeaders;


  constructor(private httpClient: HttpClient) { }

  standardHttpCall(httpparameters: string): Observable<any> {
    const httpaddr = '/' + httpparameters;
    //const httpaddr = environment.apiURL + '/' + httpparameters;
    //const httpaddr = environment.apiURL + '/hello';
    alert(httpaddr);
    return this.httpClient.get(httpaddr)
                    .pipe(
                    catchError(error => {
                        if (error.error instanceof ErrorEvent) {
                            this.errorMsg = `Error: ${error.error.message}`;
                        } else {
                            this.errorMsg = this.getServerErrorMessage(error);
                        }
                        alert(this.errorMsg);
                        return of(this.errorMsg);
                    }));

  }

  standardHttpPost(body: any): Observable<any> {
     const url = '/service';
     return this.httpClient.post<any>(url, body).pipe(
                    catchError(error => {
                        if (error.error instanceof ErrorEvent) {
                            this.errorMsg = `Error: ${error.error.message}`;
                        } else {
                            this.errorMsg = this.getServerErrorMessage(error);
                        }
                        alert(this.errorMsg);
                        return of(this.errorMsg);
                    }));
     }

     public getServerErrorMessage(error: HttpErrorResponse): string {
        switch (error.status) {
            case 404: {
                return `Not Found: ${error.message}`;
            }
            case 403: {
                return `Access Denied: ${error.message}`;
            }
            case 500: {
                return `Internal Server Error: ${error.message}`;
            }
            default: {
                return `Unknown Server Error( ${error.status}): ${error.message}`;
            }

        }
    }

}
