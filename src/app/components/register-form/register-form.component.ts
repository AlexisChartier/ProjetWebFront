import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {Clients} from "../../clients";
import {Livreurs} from "../../livreurs";

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.css'],
})
export class RegisterForm {
  @Input()
  textinput_placeholder2: string = 'Mot de passe'
  @Input()
  textinput_placeholder3: string = 'Confirmer mot de passe'
  @Input()
  textinput_placeholder4: string = 'Adresse'
  @Input()
  buttonC: string = 'Client'
  @Input()
  buttonL: string = 'Livreur'
  @Input()
  textinput_placeholder5: string = 'Email'
  @Input()
  textinput_placeholder: string = 'Nom'
  @Input()
  textinput_placeholder1: string = 'Prénom'


  registerForm=new FormGroup({
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    adresse:new FormControl('', Validators.required),
    motdepasse:new FormControl('', Validators.required),
    confmdp:new FormControl('', Validators.required),

  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder) {
  }

  // Raccourci pour accéder facilement aux contrôles du formulaire
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmitClient() {
    this.submitted = true;
    console.log('here')
    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.registerForm.invalid) {
      return;
    }
    if(this.registerForm.value.motdepasse != this.registerForm.value.confmdp){
      return;
    }

    const user:Clients = {
      client_id:null ,
      email: this.registerForm.value.email,
      mot_de_passe: this.registerForm.value.motdepasse,
      nom_client:this.registerForm.value.nom,
      prenom_client:this.registerForm.value.prenom,
      adresse_client:this.registerForm.value.adresse,
      role: "client"
    }
    console.log(user)
    this.authService.register(user);
    this.router.navigate([''])
  }

  onSubmitLivreur(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.registerForm.invalid) {
      return;
    }
    if(this.registerForm.value.motdepasse !== this.registerForm.value.confmdp){
      return;
    }

    const user:Livreurs = {
      livreur_id:null ,
      email: this.registerForm.value.email,
      mot_de_passe: this.registerForm.value.motdepasse,
      nom_livreur:this.registerForm.value.nom,
      prenom_livreur:this.registerForm.value.prenom,
      adresse_livreur:this.registerForm.value.adresse,
      role: "livreur"
    }
    console.log(user)

    this.authService.register(user);
    this.router.navigate([''])
  }
}
