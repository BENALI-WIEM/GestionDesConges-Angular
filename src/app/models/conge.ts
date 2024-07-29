export enum StatusConge {
    ACCEPTER = 'ACCEPTER',
    REFUSER = 'REFUSER',
    EN_ATTENTE = 'EN_ATTENTE'
  }
  
export interface Conge {
        idDemande?: number;
        dateDebut: Date;
        dateFin: Date;
        status: string;
        idUtilisateur: number;
    }
    
