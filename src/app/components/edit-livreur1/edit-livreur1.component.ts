import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ClientService} from "../../client.service";
import {Clients} from "../../clients";
import {LivreurService} from "../../livreur.service";
import {Livreurs} from "../../livreurs";

@Component({
  selector: 'edit-livreur1',
  templateUrl: 'edit-livreur1.component.html',
  styleUrls: ['edit-livreur1.component.css'],
})
export class EditLivreur1 {
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

  editForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    adresse: new FormControl('', Validators.required),
    motdepasse: new FormControl('', Validators.required),
    confmdp: new FormControl('', Validators.required),

  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder, private livreurService:LivreurService) {
  }

  // Raccourci pour accéder facilement aux contrôles du formulaire
  get formControls() {
    return this.editForm.controls;
  }

  onSubmitClient() {
    this.submitted = true;
    console.log('here')
    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.editForm.invalid) {
      return;
    }
    if (this.editForm.value.motdepasse != this.editForm.value.confmdp) {
      return;
    }

    const user: Livreurs = {
      livreur_id: this.authService.livreurIdEdit,
      email: this.editForm.value.email,
      mot_de_passe: this.editForm.value.motdepasse,
      nom_livreur: this.editForm.value.nom,
      prenom_livreur: this.editForm.value.prenom,
      adresse_livreur: this.editForm.value.adresse,
      role: "client"
    }
    console.log(user)
    this.livreurService.updateLivreur(user).subscribe({
      next:response =>{
        console.log(response)
        this.router.navigate(['/', 'monitoring-page-read'])
      },
      error:error=>console.log(error)
    })

  }
}
