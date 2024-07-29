import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { ValidationCongeComponent } from './validation-conge/validation-conge.component';
import { CalendrierCongeComponent } from './calendrier-conge/calendrier-conge.component';
import { HomeComponent } from './home/home.component';
import { HistoriqueCongesComponent } from './historique-conges/historique-conges.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    DemandeCongeComponent,
    ValidationCongeComponent,
    CalendrierCongeComponent,
    HomeComponent,
    HistoriqueCongesComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates :true,
      enableHtml: true,
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
