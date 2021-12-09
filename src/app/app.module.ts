import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel ici
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { VisiteurService } from './service/visiteur.service';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { Fichefrais } from './metier/fichefrais';
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import { FichefraisService } from './service/fichefrais.service';
import { EtatService } from './service/etat.service';
import { FichefraishorsforfaitService } from './service/fichefraishorsforfait.service';
import {ListefraishorsforfaitComponent} from './listefichefraishorsforfait/listefraishorsforfait.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    ListefichefraisComponent,
    FichefraisComponent,
    ListefraishorsforfaitComponent,



  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    VisiteurService,
    AuthGuard,
    FichefraisService,
    Fichefrais,
    EtatService,
    FichefraishorsforfaitService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

