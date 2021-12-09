import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Fichefrais } from '../metier/fichefrais';
import { Fichefraishorsforfait } from '../metier/fichefraishorsforfait';
import { environment } from '../../environments/environment';

const ENDPOINT = environment.endpoint;

@Injectable()
export class FichefraishorsforfaitService {
  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string;
  private unFrais: Fichefrais;

  constructor(private httpClient: HttpClient) {
    /*
    on définit le header
     */
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }
  /*
    On recherche la liste des frais
   */
  getFicheFraishorsforfaitListe(id: number): Observable<any>{
    this.ClientUrl = ENDPOINT + 'api/frais/getListeHorsForfait/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

  calculMontant(): void {
    for (let i = 0; i < this.mesFraisHT.length; i++) {
      let unFHF:Fichefraishorsforfait = this.mesFraisHT[i];
      this.montantTotal = this.montantTotal + (unFHF.montant_fraishorsforfait * 1.0);
    }
  }

  getListeFraisHorsForfait(id: number): void {
    this.unSHF.getFicheFraishorsforfaitListe(id).subscribe(
      (mesFHT)=>{
        this.mesFraisHT= mesFHT;
        /*
          on récupère un id frais pour l'ajout et la validation
         */
        this.calculMontant();
      },
      (error) => {
        this.error = error.messages;
        alert(error.messages);
      }
    );
  }
}
