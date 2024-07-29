import { Conge } from "./conge";

export interface Utilisateur {
    idUtilisateur?: number;
    nom: string;
    email: string;
    motDePasse: string;
    role: string;
    conges?: Conge[];

}
