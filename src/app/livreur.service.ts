import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Livreurs } from "./livreurs";

@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getLivreurs(): Observable<Livreurs[]> {
    return this.http.get<Livreurs[]>(`${this.apiUrl}/livreurs/get/all`);
  }

  public getLivreurById(livreur : Livreurs): Observable<Livreurs> {
    return this.http.get<Livreurs>(`${this.apiUrl}/livreurs/get/${livreur.livreur_id}`);
  }

  public getLivreurByEmail(email : string): Observable<Livreurs> {
    return this.http.get<Livreurs>(`${this.apiUrl}/livreurs/get/email/${email}`);
  }

  public addLivreur(livreur: Livreurs): Observable<Livreurs> {
    return this.http.post<Livreurs>(`${this.apiUrl}/livreurs/post`, livreur);
  }

  public updateLivreur(livreur: Livreurs): Observable<Livreurs> {
    return this.http.put<Livreurs>(`${this.apiUrl}/livreurs/update`, livreur);
  }

  public deleteLivreur(livreur : Livreurs): Observable<Livreurs> {
    return this.http.delete<Livreurs>(`${this.apiUrl}/livreurs/delete/${livreur.livreur_id}`);
  }
}
