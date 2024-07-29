import { Component, OnInit } from '@angular/core';
import { Conge } from '../models/conge';
import { CongeService } from '../services/conge.service';

@Component({
  selector: 'app-calendrier-conge',
  templateUrl: './calendrier-conge.component.html',
  styleUrls: ['./calendrier-conge.component.css']
})
export class CalendrierCongeComponent implements OnInit {
  conges: Conge[] = [];

  constructor(private congeService: CongeService) {}

  ngOnInit() {
    this.congeService.getAllConges().subscribe(
      conges => this.conges = conges,
      error => console.error('Erreur', error)
    );
  }
}