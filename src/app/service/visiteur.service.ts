import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise' ;
import 'rxjs/add/operator/map' ;
import { Visiteur } from '../metier/visiteur';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

const    ENDPOINT = environment.endpoint;
// classe de service pour les visiteurs

@Injectable()
export class VisiteurService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string;


  constructor(private httpClient: HttpClient) {

    // on définit le header
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

 /*
 On appelle un visiteur en
 mode POST avec un fux json
 */
  getLogin(unV: Visiteur): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }

  // on affiche les erreurs dans la console
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err =  JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);
  }
}



