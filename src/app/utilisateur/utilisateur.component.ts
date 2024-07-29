import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];
  loadingError = false; 
  
  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  loadUtilisateurs(): void {
    this.utilisateurService.getAllUtilisateurs().subscribe(
      utilisateurs => {
        this.utilisateurs = utilisateurs;
      },
      (error: HttpErrorResponse) => {
        console.error('Error loading utilisateurs:', error);
        this.loadingError = true; 
      }
    );
  }
}
