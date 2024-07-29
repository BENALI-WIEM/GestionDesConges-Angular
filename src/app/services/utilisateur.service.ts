import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Utilisateur } from "../models/utilisateur";

@Injectable({
    providedIn: 'root'
  })
  export class UtilisateurService {
  
    private apiUrl = 'http://localhost:8080/api/utilisateurs';
  
    constructor(private http: HttpClient) { }
  
    getAllUtilisateurs(): Observable<Utilisateur[]> {
        return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' }).pipe(
          map(response => JSON.parse(response) as Utilisateur[])
        );
    }
  
    createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
      return this.http.post<Utilisateur>(this.apiUrl, utilisateur);
    }}