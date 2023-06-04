import {Injectable} from '@angular/core';
import {ClientService} from "./client.service";
import {LivreurService} from "./livreur.service";
import {AdminService} from "./admin.service";
import {VendeurService} from "./vendeur.service";
import * as CryptoJS from 'crypto-js';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _produitIdEdit;
  private _clientIdEdit;
  private _livreurIdEdit;
  private _magasinIdEdit;
  private _vendeurIdEdit;
  private _magasinIdVendeur:number;
  private magasinDetailId: number;
  private currentUser: any;
  private _currentUserId: number;
  private roleUser: string;
  private encPassword:string;
  private decPassword:string;
  private  key = CryptoJS.enc.Utf8.parse("1aBcDeFgHiJkLmNo");
  constructor(private clientService: ClientService, private livreurService: LivreurService, private adminService: AdminService, private vendeurService : VendeurService, private router: Router) { }
  get produitIdEdit() {
    return this._produitIdEdit;
  }

  set produitIdEdit(value) {
    this._produitIdEdit = value;
  }

  get clientIdEdit() {
    return this._clientIdEdit;
  }

  set clientIdEdit(value) {
    this._clientIdEdit = value;
  }

  get livreurIdEdit() {
    return this._livreurIdEdit;
  }

  set livreurIdEdit(value) {
    this._livreurIdEdit = value;
  }

  get magasinIdEdit() {
    return this._magasinIdEdit;
  }

  set magasinIdEdit(value) {
    this._magasinIdEdit = value;
  }

  get vendeurIdEdit() {
    return this._vendeurIdEdit;
  }

  set vendeurIdEdit(value) {
    this._vendeurIdEdit = value;
  }


  get currentUserId(): number {
    return this._currentUserId;
  }

  set currentUserId(value: number) {
    this._currentUserId = value;
  }

  public getMagasinIdVendeur(): number {
    return this._magasinIdVendeur;
  }

  public setMagasinIdVendeur(value: number) {
    this._magasinIdVendeur = value;
  }

  public setCurrentUser(user: any): void{
    this.currentUser = user;
  }

  public setMagasinDetailId(id){
    this.magasinDetailId = id;
  }
  public getMagasinDetailId():number{
    return this.magasinDetailId
  }
  private encryptPassword(plainPassword: string): string{
    const encrypted = CryptoJS.AES.encrypt(plainPassword, this.key, {
      mode: CryptoJS.mode.ECB, // Mode de chiffrement
      padding: CryptoJS.pad.Pkcs7, // Mode de padding
    });
    return encrypted.toString();
  }
  private decryptPassword(encryptedPassword: string): string{
    const decrypted = CryptoJS.AES.decrypt(encryptedPassword, this.key, {
      mode: CryptoJS.mode.ECB, // Mode de déchiffrement
      padding: CryptoJS.pad.Pkcs7, // Mode de padding
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  public register(user): boolean{
    if(user.role === "client"){
      this.encPassword = this.encryptPassword(user.mot_de_passe);
      console.log(this.encPassword)
      user.mot_de_passe = this.encPassword;
      this.clientService.addClient(user).subscribe({
        next:response=>{
          console.log(response)
        },
        error:error => console.log(error)
      });
      return true;
    }
    else if(user.role === "livreur"){
      this.encPassword = this.encryptPassword(user.mot_de_passe);
      user.mot_de_passe = this.encPassword;
      this.livreurService.addLivreur(user).subscribe({
        next:response=>{
        console.log(response)
      },
        error:error => console.log(error)
    });
      return true;
    }
    else{
      return false;
    }
  }

  public logIn(username:string,password:string):boolean{
    this.adminService.getAdminByEmail(username).subscribe({
        next:response=>{
          this.currentUser = response;
          console.log(response)
          this.decPassword = response.mot_de_passe;
          this.roleUser = response.role;
          if(this.decPassword === password){
            this.router.navigate(['/','monitoring-page-read'])
            return true
          }
          else {
            this.logout()
            return false;
          }
        },
        error:error => console.log(error)
      }
    );
      this.clientService.getClientByEmail(username).subscribe({
          next:response=>{
            this.currentUser = response;
            console.log(response)
            this.decPassword = this.decryptPassword(response.mot_de_passe);
            this.roleUser = response.role;
            if(this.decPassword === password){
              this.router.navigate(['/','order'])
              return true
            }
            else {
              this.logout()
              return false;
            }
          },
          error:error => console.log(error)
        }
      );


    this.livreurService.getLivreurByEmail(username).subscribe({
        next:response=>{
          this.currentUser = response;
          console.log(response)
          this.decPassword = this.decryptPassword(response.mot_de_passe)
          this.roleUser = response.role;
          if(this.decPassword === password){
            this.router.navigate(['/','livreur'])
            return true
          }
          else {
            this.logout()
            return false;
          }
        },
        error:error => console.log(error)
      }
    );


    this.vendeurService.getVendeurByEmail(username).subscribe({
        next:response=>{
          this.currentUser = response;
          this.decPassword = response.mot_de_passe;
          this.roleUser = response.role;
          if(this.decPassword === password){
            this._magasinIdVendeur = response.magasin_id;
            this.router.navigate(['/','vendeur-page'])
            return true
          }
          else {
            this.logout()
            return false;
          }
        },
        error:error => console.log(error),
      }
    );


    console.log(this.decPassword + " " + password)

    /*if(this.decPassword === password){
      return true
    }
    else {
      this.logout()
      return false;
    }*/
    return false;
  }



  // Méthode pour vérifier si l'utilisateur est connecté
  public isLoggedIn(): boolean {
    return !!this.currentUser; // Vérifie si currentUser est défini
  }

  // Méthode pour vérifier si l'utilisateur est un client
  public isClient(): boolean {
    return this.isLoggedIn() && this.roleUser === 'client';
  }

  // Méthode pour vérifier si l'utilisateur est un livreur
  public isLivreur(): boolean {
    return this.isLoggedIn() && this.roleUser === 'livreur';
  }

  // Méthode pour vérifier si l'utilisateur est un vendeur
  public isVendeur(): boolean {
    return this.isLoggedIn() && this.roleUser === 'vendeur';
  }

  // Méthode pour vérifier si l'utilisateur est un administrateur
  public isAdmin(): boolean {
    return this.isLoggedIn() && this.roleUser === 'administrateur';
  }

  // Méthode pour déconnecter l'utilisateur
  public logout(): void {
    this.currentUser = null;
    // Ajoutez ici le code pour effectuer les opérations de déconnexion appropriées, par exemple, supprimer les jetons d'authentification, vider le cache, etc.
  }
}
