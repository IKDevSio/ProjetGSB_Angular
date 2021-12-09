import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Fichefrais} from '../metier/fichefrais';
import {Etat} from '../metier/etat';
import { environment } from 'environments/environment';

const    ENDPOINT = environment.endpoint;

@Injectable()
export class EtatService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string;

  private unFrais: Fichefrais;
  private unEtat: EtatService;


  constructor(private httpClient: HttpClient) {
    // on définit le header
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  getListeEtat(): Observable<any>{
    this.ClientUrl = ENDPOINT + 'api/frais/listeEtat';
    return this.httpClient.get(this.ClientUrl);
  }
}
