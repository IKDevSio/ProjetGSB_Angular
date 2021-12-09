import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Fichefrais} from '../metier/fichefrais';
import { environment } from 'environments/environment';

const    ENDPOINT = environment.endpoint;


@Injectable()
export class FichefraisService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string;

  private unFrais: Fichefrais;

  constructor(private httpClient: HttpClient) {
    // on définit le header
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  /*
  on recherche la liste des frais
   */

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/listeFrais/' + id;
    return this.httpClient.get(this.ClientUrl);

  }

  getFicheFrais(id: number): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/getUnFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

  updateFrais(unFrais: Fichefrais): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/updateFicheFrais';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));

  }

  ajoutFrais(unFrais: Fichefrais): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/addFicheFrais';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));

  }

  deleteFrais(unFrais: Fichefrais): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/deleteFicheFrais';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));
  }

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
