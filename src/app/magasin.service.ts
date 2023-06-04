import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Magasins} from "./magasins";

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getMagasins(): Observable<Magasins[]> {
    return this.http.get<Magasins[]>(`${this.apiUrl}/magasins/get/all`);
  }

  public getMagasinById(magasinId: number): Observable<Magasins> {
    return this.http.get<Magasins>(`${this.apiUrl}/magasins/get/${magasinId}`);
  }

  public addMagasin(magasin: Magasins): Observable<Magasins> {
    return this.http.post<Magasins>(`${this.apiUrl}/magasins/post`, magasin);
  }

  public updateMagasin(magasin: Magasins): Observable<Magasins> {
    return this.http.put<Magasins>(`${this.apiUrl}/magasins/update`, magasin);
  }

  public deleteMagasin(magasinId: number): Observable<Magasins> {
    return this.http.delete<Magasins>(`${this.apiUrl}/magasins/delete/${magasinId}`);
  }
}
