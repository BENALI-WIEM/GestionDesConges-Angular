import { Component, OnInit } from '@angular/core';
import { Conge } from '../models/conge';
import { CongeService } from '../services/conge.service';

@Component({
  selector: 'app-historique-conges',
  templateUrl: './historique-conges.component.html',
  styleUrls: ['./historique-conges.component.css']
})
export class HistoriqueCongesComponent implements OnInit {
  conges: Conge[] = [];
  idUtilisateur = 1; 

  constructor(private congeService: CongeService) {}

  ngOnInit() {
    this.loadHistoriqueConges();
  }

  loadHistoriqueConges() {
    this.congeService.getHistoriqueConges(this.idUtilisateur).subscribe(
      data => {
        this.conges = data;
      },
      error => {
        console.error('Erreur lors du chargement de l\'historique des congés', error);
      }
    );
  }
}