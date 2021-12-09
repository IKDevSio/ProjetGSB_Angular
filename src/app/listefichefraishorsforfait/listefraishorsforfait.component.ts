import {Component, OnInit} from '@angular/core';
import {FichefraishorsforfaitService} from '../service/fichefraishorsforfait.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {Fichefraishorsforfait} from '../metier/fichefraishorsforfait';



@Component({
  selector: 'app-listefraishorsforfait',
  templateUrl: './listefraishorsforfait.component.html',
  styleUrls: ['./listefraishorsforfait.component.css']
})
export class ListefraishorsforfaitComponent implements OnInit{
  private mesFraisHT: Fichefraishorsforfait[];
  private visiteurid: number;
  private titre: string;
  private id: number;
  private error: string;
  private montantTotal: number;
  private idFrais: number;
  private unFraisHF: Fichefraishorsforfait;

  constructor(private unSHF: FichefraishorsforfaitService,
              private activatedRoute: ActivatedRoute,
              private unRouteur: Router) {
  }

  ngOnInit() {
    this.error = '';
    this.montantTotal = 0;
    let item = LocalStorage.getItem('id');
    this.id = Number.parseInt(item);
    this.titre = 'Liste des frais du visiteur ' + this.id;
    this.visiteurid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getListeFraisHorsForfait(this.visiteurid);
  }

  getListeFraisHorsForfait(id: number): void{
    this.unSHF.getFicheFraishorsforfaitListe(id).subscribe(
      (mesFHT) => {
        this.mesFraisHT = mesFHT;
        /*
        On récupère un id frais pour l'ajout et la validation
         */
        this.idFrais = this.mesFraisHT[0].id_frais;
        this.unSHF.calculMontant();
      },
      (error) => {
        this.error = error.messages;
        alert (error.messages);
      }
    );
  }
}
