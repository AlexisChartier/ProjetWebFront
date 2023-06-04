import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { ContenuCommande} from "./contenuCommande";

@Injectable({
  providedIn: 'root'
})
export class ContenuCommandeService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getContenusCommande(): Observable<ContenuCommande[]> {
    return this.http.get<ContenuCommande[]>(`${this.apiUrl}/contenus-commande/get/all`);
  }

  public getContenuCommandeById(contenuCommandeId: number): Observable<ContenuCommande> {
    return this.http.get<ContenuCommande>(`${this.apiUrl}/contenus-commande/get/${contenuCommandeId}`);
  }

  public addContenuCommande(contenuCommande: ContenuCommande): Observable<ContenuCommande> {
    return this.http.post<ContenuCommande>(`${this.apiUrl}/contenus-commande/post`, contenuCommande);
  }

  public updateContenuCommande(contenuCommande: ContenuCommande): Observable<ContenuCommande> {
    return this.http.put<ContenuCommande>(`${this.apiUrl}/contenus-commande/update`, contenuCommande);
  }

  public deleteContenuCommande(contenuCommandeId: number): Observable<ContenuCommande> {
    return this.http.delete<ContenuCommande>(`${this.apiUrl}/contenus-commande/delete/${contenuCommandeId}`);
  }
}
