import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import {Etat} from '../metier/etat';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FichefraisService} from '../service/fichefrais.service';
import {errorObject} from 'rxjs/util/errorObject';
import {EtatService} from '../service/etat.service';
@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})

export class FichefraisComponent implements OnInit {

  private  unFrais: Fichefrais;
  private fraisid: number;
  private titre: string = "Modification d'un frais";
  private paramMap: ParamMap;
  private error: string = '';
  private unEtat: Etat;
  private mesEtats: Etat[];


  constructor(private unFS: FichefraisService,
              private unES: EtatService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) {
  }

  ngOnInit() {

    this.fraisid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getFichefrais(this.fraisid);
    this.getEtat();
  }

  getFichefrais(id: number): void {

    this.unFS.getFicheFrais(id).subscribe(
      (unfrais) => {
        this.unFrais = unfrais;
      },
      (error) => {
        this.error = error.messages;
      }
    );
  }

  getEtat(): void {
    this.unES.getListeEtat().subscribe(
      (mesEtats) => {
        this.mesEtats = mesEtats;
      },
      (error) => {
        this.error = error.messages;
      }
    );
  }

  valider(): void {
    this.unFS.updateFrais(this.unFrais).subscribe(
      () => {
      },
      (error) => {
        this.error = error.messages;
      }
    );
    if (this.error != '')
      alert("Erreur survenue " + this.error);
    else
      alert("Modification réussie !");
    this.unRouteur.navigate(['/accueil']);

  }

  annuler(): void {
    this.unRouteur.navigate(['/accueil']);

  }
}
