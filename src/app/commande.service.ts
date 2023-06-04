import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Commandes} from "./commandes";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getCommandes(): Observable<Commandes[]> {
    return this.http.get<Commandes[]>(`${this.apiUrl}/commandes/get/all`);
  }

  public getCommandeById(commandeId: number): Observable<Commandes> {
    return this.http.get<Commandes>(`${this.apiUrl}/commandes/get/${commandeId}`);
  }

  public addCommande(commande: Commandes): Observable<Commandes> {
    return this.http.post<Commandes>(`${this.apiUrl}/commandes/post`, commande);
  }

  public updateCommande(commande: Commandes): Observable<Commandes> {
    return this.http.put<Commandes>(`${this.apiUrl}/commandes/update`, commande);
  }

  public deleteCommande(commandeId: number): Observable<Commandes> {
    return this.http.delete<Commandes>(`${this.apiUrl}/commandes/delete/${commandeId}`);
  }
}
