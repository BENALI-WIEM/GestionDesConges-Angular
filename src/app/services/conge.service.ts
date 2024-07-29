import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Conge } from "../models/conge";

@Injectable({
    providedIn: 'root'
  })
  export class CongeService {
    private apiUrl = 'http://localhost:8080/api/conges';

    constructor(private http: HttpClient) { }
  
    demanderConge(conge: Conge): Observable<Conge> {
      return this.http.post<Conge>(`${this.apiUrl}?idUtilisateur=${conge.idUtilisateur}`, conge);
    }
  
    validerConge(idDemande: number, status: String): Observable<Conge> {
      return this.http.put<Conge>(`${this.apiUrl}/${idDemande}?status=${status}`, {});
    }
  
    getCongesUtilisateur(idUtilisateur: number): Observable<Conge[]> {
      return this.http.get<Conge[]>(`${this.apiUrl}/utilisateur/${idUtilisateur}`);
    }
  
    getAllConges(): Observable<Conge[]> {
      return this.http.get<Conge[]>(this.apiUrl);
    }

    getHistoriqueConges(idUtilisateur: number): Observable<Conge[]> {
        return this.http.get<Conge[]>(`${this.apiUrl}/utilisateur/${idUtilisateur}/historique`);
      }
  }