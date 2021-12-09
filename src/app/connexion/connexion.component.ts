import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {VisiteurService} from '../service/visiteur.service';
import {Visiteur} from '../metier/visiteur';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

   private titre : string = 'Connexion';
   private userLogin  : string ;
   private userMdp : string ;
   private lblMdp : string = 'Entrez votre mot de passe :';
   private lblLogin : string  = 'login :';
   private lblMessage : string ;
   private estCache : boolean = true;
   private unVisiteur : Visiteur;
   private error : string = '';

   constructor(private unVS: VisiteurService, private router: Router) { }

  ngOnInit() {
  }


  valider() : void  {
     this.unVisiteur = new Visiteur();
     this.unVisiteur.login_visiteur= this.userLogin;
     this.unVisiteur.pwd_visiteur= this.userMdp;
     this.unVisiteur.id_visiteur=0;

    this.unVS.getLogin(this.unVisiteur).subscribe(
      (visiteur)  => {
              this.unVisiteur = visiteur ;
              if (this.unVisiteur.id_visiteur!=0)
              {
                alert("Authentification réussie !!!");
                // on crée une variable de session avec Javascript (localstorage)
                localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
                this.router.navigate(['accueil']);
              }
              else {
                alert("Erreur d'appel!");
              }
           },
            (error) => {
                    this.error = error.messages;
            });
 }
}
