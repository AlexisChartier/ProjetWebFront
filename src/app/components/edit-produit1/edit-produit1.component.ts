import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../produit.service";
import {Produits} from "../../produits";

@Component({
  selector: 'edit-produit1',
  templateUrl: 'edit-produit1.component.html',
  styleUrls: ['edit-produit1.component.css'],
})
export class EditProduit1 {
  @Input()
  textinput_placeholder: string = 'Nom Produit'
  @Input()
  textinput_placeholder1: string = 'Description'
  @Input()
  textinput_placeholder2: string = 'Prix'
  @Input()
  textinput_placeholder3: string = 'placeholder'
  @Input()
  text: string = 'Image'
  @Input()
  textinput_placeholder4: string = 'IdMagasin'

  submitted = false;

  EditProduitForm=new FormGroup({
    nomProduit:new FormControl('',Validators.required),
    Description:new FormControl('', Validators.required),
    prix:new FormControl('', Validators.required),
    idMagasin:new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService,
              private router: Router,private formBuilder: FormBuilder, private produitService:ProduitService) {
  }

  onClick(){
    this.submitted = true;

    // Arrêtez-vous ici si le formulaire n'est pas valide
    if (this.EditProduitForm.invalid) {
      return;
    }
    const obj:Produits = {
      produit_id:this.authService.produitIdEdit ,
      description_produit: this.EditProduitForm.value.Description,
      nom_produit: this.EditProduitForm.value.nomProduit,
      prix_produit:Number(this.EditProduitForm.value.prix),
      magasin_id:Number(this.EditProduitForm.value.idMagasin),
      imgsrc: null
    }
    console.log(obj)

    this.produitService.updateProduit(obj);
    this.router.navigate(['/','monitoring-page-add'])
  }
}
