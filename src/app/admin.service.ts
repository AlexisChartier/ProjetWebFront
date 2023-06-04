import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { STRINGS } from './strings.module';
import { Administrateurs } from "./administrateurs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = STRINGS.apiUrl;

  constructor(private http: HttpClient) { }

  public getAdmins(): Observable<Administrateurs[]> {
    return this.http.get<Administrateurs[]>(`${this.apiUrl}/administrateurs/get/all`);
  }

  public getAdminById(admin : Administrateurs): Observable<Administrateurs> {
    return this.http.get<Administrateurs>(`${this.apiUrl}/administrateurs/get/${admin.administrateur_id}`);
  }
  public getAdminByEmail(email : string): Observable<Administrateurs> {
    return this.http.get<Administrateurs>(`${this.apiUrl}/administrateurs/get/email/${email}`);
  }

  public addAdmin(admin: Administrateurs): Observable<Administrateurs> {
    return this.http.post<Administrateurs>(`${this.apiUrl}/administrateurs/post`, admin);
  }

  public updateAdmin(admin: Administrateurs): Observable<Administrateurs> {
    return this.http.put<Administrateurs>(`${this.apiUrl}/administrateurs/update`, admin);
  }

  public deleteAdmin(admin : Administrateurs): Observable<Administrateurs> {
    return this.http.delete<Administrateurs>(`${this.apiUrl}/administrateurs/delete/${admin.administrateur_id}`);
  }
}
