import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../produit.service";
import {Produits} from "../../produits";
import {MagasinService} from "../../magasin.service";
import {Magasins} from "../../magasins";

@Component({
  selector: 'edit-magasin1',
  templateUrl: 'edit-magasin1.component.html',
  styleUrls: ['edit-magasin1.component.css'],
})
export class EditMagasin1 {
  @Input()
  textinput_placeholder: string = 'Nom'
  @Input()
  textinput_placeholder1: string = 'Adresse'
  @Input()
  textinput_placeholder2: string = 'image'
  @Input()
  text: string = 'Image'
  @Input()
  textarea_placeholder: string = 'Description'
  submitted = false;

  EditMagasinForm=new FormGroup({
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
    if (this.EditMagasinForm.invalid) {
      return;
    }
    const obj:Magasins = {
      magasin_id:this.authService.produitIdEdit ,
      description: this.EditMagasinForm.value.Description,
      adresse_magasin: this.EditMagasinForm.value.adresse,
      nom_magasin: this.EditMagasinForm.value.nomMagasin,
      imgsrc: null
    }
    console.log(obj)

    this.magasinService.updateMagasin(obj);
    this.router.navigate(['/','monitoring-page-add'])
  }
}
