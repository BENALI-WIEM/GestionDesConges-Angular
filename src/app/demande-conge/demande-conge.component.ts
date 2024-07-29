import { Component } from '@angular/core';
import { Conge, StatusConge } from '../models/conge';
import { CongeService } from '../services/conge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent {
  conge: Conge = {
    dateDebut: new Date(),
    dateFin: new Date(),
    status: StatusConge.EN_ATTENTE,
    idUtilisateur: 1 
};

constructor(private congeService: CongeService, private router: Router) {}

  onSubmit() {
    this.congeService.demanderConge(this.conge).subscribe(
      response => {
        console.log('Congé demandé', response);
        // Optionnel : rediriger vers une autre page après la soumission
        // this.router.navigate(['/confirmation']);
      },
      error => console.error('Erreur', error)
    );
  }

  onCancel() {

    this.conge = {
      dateDebut: new Date(),
      dateFin: new Date(),
      status: StatusConge.EN_ATTENTE,
      idUtilisateur: 1 
    };

    this.router.navigate(['/home']);
  }
}