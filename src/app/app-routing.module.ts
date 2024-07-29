import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { ValidationCongeComponent } from './validation-conge/validation-conge.component';
import { CalendrierCongeComponent } from './calendrier-conge/calendrier-conge.component';
import { HomeComponent } from './home/home.component';
import { HistoriqueCongesComponent } from './historique-conges/historique-conges.component';

const routes: Routes = [
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'demande-conge', component: DemandeCongeComponent },
  { path: 'validation-conge', component: ValidationCongeComponent },
  { path: 'calendrier-conge', component: CalendrierCongeComponent},
  { path: '', redirectTo: '/demande-conge', pathMatch: 'full' },
  {path: 'home', component:HomeComponent},
  { path: 'historique-conges', component: HistoriqueCongesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
