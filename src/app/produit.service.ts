import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Produits} from "./produits";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${this.apiUrl}/produit/get/all`);
  }

  public getProduitById(produitId: number): Observable<Produits> {
    return this.http.get<Produits>(`${this.apiUrl}/produit/get/${produitId}`);
  }

  public getProduitByMagasinId(magasinId: number): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${this.apiUrl}/produit/get/byMagasin/${magasinId}`);
  }

  public addProduit(produit: Produits): Observable<Produits> {
    return this.http.post<Produits>(`${this.apiUrl}/produit/post`, produit);
  }

  public updateProduit(produit: Produits): Observable<Produits> {
    return this.http.put<Produits>(`${this.apiUrl}/produit/update`, produit);
  }

  public deleteProduit(produitId: number): Observable<Produits> {
    return this.http.delete<Produits>(`${this.apiUrl}/produit/delete/${produitId}`);
  }
}
