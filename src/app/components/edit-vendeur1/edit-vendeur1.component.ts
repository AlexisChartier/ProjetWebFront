import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {Clients} from "../../clients";
import {ClientService} from "../../client.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {VendeurService} from "../../vendeur.service";
import {Vendeurs} from "../../vendeurs";

@Component({
  selector: 'edit-profil1',
  templateUrl: 'edit-vendeur1.component.html',
  styleUrls: ['edit-vendeur1.component.css'],
})
export class EditVendeur1 {
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
  @Input()
  textinput_placeholder6: string = 'Id Magasin'

  editForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    adresse: new FormControl('', Validators.required),
    motdepasse: new FormControl('', Validators.required),
    confmdp: new FormControl('', Validators.required),
    idMagasin:new FormControl('', Validators.required)

  });
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router, private formBuilder: FormBuilder, private vendeurService:VendeurService) {
  }

  // Raccourci pour accéder facilement aux contrôles du formulaire
  get formControls() {
    return this.editForm.controls;
  }

  onClick() {
    this.submitted = true;
    console.log('here')
    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.editForm.invalid) {
      return;
    }
    if (this.editForm.value.motdepasse != this.editForm.value.confmdp) {
      return;
    }

    const user: Vendeurs = {
      vendeur_id: this.authService.vendeurIdEdit,
      email: this.editForm.value.email,
      mot_de_passe: this.editForm.value.motdepasse,
      nom_vendeur: this.editForm.value.nom,
      prenom_vendeur: this.editForm.value.prenom,
      adresse_vendeur: this.editForm.value.adresse,
      role: "vendeur",
      magasin_id: Number(this.editForm.value.idMagasin)
    }
    console.log(user)
    this.vendeurService.updateVendeur(user).subscribe({
      next:response =>{
        console.log(response)
      },
      error:error=>console.log(error)
    })
    this.router.navigate(['/','monitoring-page-read'])
  }
}
