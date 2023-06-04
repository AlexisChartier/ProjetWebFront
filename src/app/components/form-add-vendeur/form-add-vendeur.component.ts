import { Component, Input } from '@angular/core'
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LivreurService} from "../../livreur.service";
import {Livreurs} from "../../livreurs";
import {VendeurService} from "../../vendeur.service";
import {Vendeurs} from "../../vendeurs";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'form-add-vendeur',
  templateUrl: 'form-add-vendeur.component.html',
  styleUrls: ['form-add-vendeur.component.css'],
})
export class FormAddVendeur {
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
  textinput_placeholder6: string = 'Id magasin'

  submitted = false;


  addVendeurForm=new FormGroup({
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email]),
    adresse:new FormControl('', Validators.required),
    motdepasse:new FormControl('', Validators.required),
    confmdp:new FormControl('', Validators.required),
    magasin_id:new FormControl('', Validators.required)

  });
  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder, private vendeurService:VendeurService) {
  }

  onClick(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.addVendeurForm.invalid) {
      return;
    }
    if(this.addVendeurForm.value.motdepasse !== this.addVendeurForm.value.confmdp){
      return;
    }
    const user:Vendeurs = {
      vendeur_id:null ,
      email: this.addVendeurForm.value.email,
      mot_de_passe: this.addVendeurForm.value.motdepasse,
      nom_vendeur:this.addVendeurForm.value.nom,
      prenom_vendeur:this.addVendeurForm.value.prenom,
      adresse_vendeur:this.addVendeurForm.value.adresse,
      magasin_id:Number(this.addVendeurForm.value.magasin_id),
      role: "vendeur"
    }
    console.log(user)

    this.vendeurService.addVendeur(user).subscribe({
      next:response=>{
        console.log()
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error => console.log(error)
    });
  }
}

