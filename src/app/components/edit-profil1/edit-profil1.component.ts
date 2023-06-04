import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {Clients} from "../../clients";
import {ClientService} from "../../client.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'edit-profil1',
  templateUrl: 'edit-profil1.component.html',
  styleUrls: ['edit-profil1.component.css'],
})
export class EditProfil1 {
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
              private router: Router, private formBuilder: FormBuilder, private clientService:ClientService) {
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

    const user: Clients = {
      client_id: this.authService.clientIdEdit,
      email: this.editForm.value.email,
      mot_de_passe: this.editForm.value.motdepasse,
      nom_client: this.editForm.value.nom,
      prenom_client: this.editForm.value.prenom,
      adresse_client: this.editForm.value.adresse,
      role: "client"
    }
    console.log(user)
    this.clientService.updateClient(user).subscribe({
      next:response =>{
        console.log(response)
        this.router.navigate(['/', 'monitoring-page-read'])
      },
      error:error=>console.log(error)
    })

  }
}
