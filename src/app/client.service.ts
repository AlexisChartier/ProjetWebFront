import { Injectable } from '@angular/core';

import {STRINGS} from "./strings.module";

import {Clients} from "./clients";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiServerurl = STRINGS.apiUrl;
  constructor(private http: HttpClient) { }

  public getClients(): Observable<Clients[]>{
    return this.http.get<Clients[]>(`${STRINGS.apiUrl}/clients/get/all`);
  }

  public getClientById(id : number): Observable<Clients>{
    return this.http.get<Clients>(`${STRINGS.apiUrl}/clients/get/${id}`);
  }

  public getClientByEmail(email : string): Observable<Clients>{
    return this.http.get<Clients>(`${STRINGS.apiUrl}/clients/get/email/${email}`);
  }

  public addClient(client : Clients): Observable<Clients>{
    return this.http.post<Clients>(`${STRINGS.apiUrl}/clients/post`, client);
  }

  public updateClient(client : Clients): Observable<Clients>{
    return this.http.put<Clients>(`${STRINGS.apiUrl}/clients/update`, client);
  }

  public deleteClient(id : number): Observable<Clients>{
    return this.http.delete<Clients>(`${STRINGS.apiUrl}/clients/delete/${id}`);
  }
}
