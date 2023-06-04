import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../produit.service";
import {Produits} from "../../produits";
import {MagasinService} from "../../magasin.service";
import {Magasins} from "../../magasins";

@Component({
  selector: 'form-add-magasin',
  templateUrl: 'form-add-magasin.component.html',
  styleUrls: ['form-add-magasin.component.css'],
})
export class FormAddMagasin {
  @Input()
  textinput_placeholder: string = 'Nom Magasin'
  @Input()
  textinput_placeholder1: string = 'Adresse'
  @Input()
  textinput_placeholder2: string = 'Description'
  @Input()
  textinput_placeholder3: string = 'image'

  submitted = false;


  addMagasinForm=new FormGroup({
    nomMagasin:new FormControl('',Validators.required),
    Description:new FormControl('', Validators.required),
    adresse:new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder, private magasinService:MagasinService) {
  }

  onClick(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.addMagasinForm.invalid) {
      return;
    }
    const obj:Magasins = {
      magasin_id:null ,
      nom_magasin: this.addMagasinForm.value.nomMagasin,
      adresse_magasin: this.addMagasinForm.value.adresse,
      description: this.addMagasinForm.value.Description,
      imgsrc: null
    }
    console.log(obj)

    this.magasinService.addMagasin(obj).subscribe({
      next:response=>{
        console.log(response)
        this.router.navigate(['/','monitoring-page-read'])
      }
    });
  }
}
