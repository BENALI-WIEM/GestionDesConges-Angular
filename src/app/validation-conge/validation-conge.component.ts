import { Component, OnInit } from '@angular/core';
import { Conge, StatusConge } from '../models/conge';
import { CongeService } from '../services/conge.service';

@Component({
  selector: 'app-validation-conge',
  templateUrl: './validation-conge.component.html',
  styleUrls: ['./validation-conge.component.css']
})
export class ValidationCongeComponent implements OnInit {
  conges: Conge[] = [];
  StatusConge = StatusConge;

  constructor(private congeService: CongeService) {}

  ngOnInit() {
    this.loadConges();
  }

  loadConges() {
    this.congeService.getAllConges().subscribe(
      conges => this.conges = conges,
      error => console.error('Erreur', error)
    );
  }

  validerConge(idDemande: number, status: StatusConge) {
    this.congeService.validerConge(idDemande, status).subscribe(
      () => this.loadConges(),
      error => console.error('Erreur', error)
    );
  }
}