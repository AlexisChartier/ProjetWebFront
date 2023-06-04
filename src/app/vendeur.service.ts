import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Vendeurs } from "./vendeurs";

@Injectable({
  providedIn: 'root'
})
export class VendeurService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getVendeurs(): Observable<Vendeurs[]> {
    return this.http.get<Vendeurs[]>(`${this.apiUrl}/vendeurs/get/all`);
  }

  public getVendeurById(vendeur: Vendeurs): Observable<Vendeurs> {
    return this.http.get<Vendeurs>(`${this.apiUrl}/vendeurs/get/${vendeur.vendeur_id}`);
  }

  public getVendeurByEmail(email: string): Observable<Vendeurs> {
    return this.http.get<Vendeurs>(`${this.apiUrl}/vendeurs/get/email/${email}`);
  }

  public addVendeur(vendeur: Vendeurs): Observable<Vendeurs> {
    return this.http.post<Vendeurs>(`${this.apiUrl}/vendeurs/post`, vendeur);
  }

  public updateVendeur(vendeur: Vendeurs): Observable<Vendeurs> {
    return this.http.put<Vendeurs>(`${this.apiUrl}/vendeurs/update`, vendeur);
  }

  public deleteVendeur(vendeurId: number): Observable<Vendeurs> {
    return this.http.delete<Vendeurs>(`${this.apiUrl}/vendeurs/delete/${vendeurId}`);
  }
}
