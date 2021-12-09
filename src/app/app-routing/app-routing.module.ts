import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListefichefraisComponent } from '../listefichefrais/listefichefrais.component';
import { FichefraisComponent } from '../fichefrais/fichefrais.component';
/*
import { AjoutfichefraisComponent} from '../ajouterfrais/ajoutfichefrais.component';
*/
import { NavbarComponent } from '../navbar/navbar.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import {ListefraishorsforfaitComponent} from '../listefichefraishorsforfait/listefraishorsforfait.component';
/*
import { ListefraishorsforfaitComponent } from '../listefichefraishorsforfait/listefraishorsforfait.component';
import { AjoutfraishorsforfaitComponent} from '../ajouterfraishorsforfait/ajoutfraishorsforfait.component';
import { FichefraishorsforfaitComponent} from '../fichefraishorsforfait/fichefraishf.component';
*/

const routes : Routes =  [

  { path: '', redirectTo : '/connexion', pathMatch: 'full'  },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Listefichefrais', component: ListefichefraisComponent },
  { path: 'Listefichehorsforfait/:id', component: ListefraishorsforfaitComponent },
  { path: 'modifierFrais/:id', component: FichefraisComponent },
  /*
  { path: 'ajoutfrais', component: AjoutfichefraisComponent},
  { path: 'ajouterfraishf/:id', component: AjoutfraishorsforfaitComponent },
  */{ path: 'supprimerFrais/:id', component: FichefraisComponent },
  { path: 'accueil', component: NavbarComponent }

]

@NgModule({
    imports:  [RouterModule.forRoot(routes)],
    exports: [RouterModule] ,
})

export class AppRoutingModule { }
