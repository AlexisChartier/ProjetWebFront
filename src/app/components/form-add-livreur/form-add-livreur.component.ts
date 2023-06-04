import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ClientService} from "../../client.service";
import {Clients} from "../../clients";
import {LivreurService} from "../../livreur.service";
import {Livreurs} from "../../livreurs";

@Component({
  selector: 'form-add-livreur',
  templateUrl: 'form-add-livreur.component.html',
  styleUrls: ['form-add-livreur.component.css'],
})
export class FormAddLivreur {
  @Input()
  textinput_placeholder: string = 'Nom'
  @Input()
  textinput_placeholder1: string = 'Prénom'
  @Input()
  textinput_placeholder2: string = 'Mot de passe'
  @Input()
  textinput_placeholder3: string = 'Confirmer mot de passe'
  @Input()
  textinput_placeholder4: string = 'Adresse'
  @Input()
  textinput_placeholder5: string = 'Email'

  addLivreurForm=new FormGroup({
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    adresse:new FormControl('', Validators.required),
    motdepasse:new FormControl('', Validators.required),
    confmdp:new FormControl('', Validators.required),

  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder, private livreurService:LivreurService) {
  }

  onClick(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.addLivreurForm.invalid) {
      return;
    }
    if(this.addLivreurForm.value.motdepasse !== this.addLivreurForm.value.confmdp){
      return;
    }

    const user:Livreurs = {
      livreur_id:null ,
      email: this.addLivreurForm.value.email,
      mot_de_passe: this.addLivreurForm.value.motdepasse,
      nom_livreur:this.addLivreurForm.value.nom,
      prenom_livreur:this.addLivreurForm.value.prenom,
      adresse_livreur:this.addLivreurForm.value.adresse,
      role: "livreur"
    }
    console.log(user)

    this.livreurService.addLivreur(user).subscribe({
      next:next => {
        console.log()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error => {
        console.log(error)
      }
    });
  }
}

