import { Component, Input } from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {VendeurService} from "../../vendeur.service";
import {Vendeurs} from "../../vendeurs";
import {ProduitService} from "../../produit.service";
import {Produits} from "../../produits";

@Component({
  selector: 'form-add-produit',
  templateUrl: 'form-add-produit.component.html',
  styleUrls: ['form-add-produit.component.css'],
})
export class FormAddProduit {
  @Input()
  textinput_placeholder: string = 'Nom produit'
  @Input()
  textinput_placeholder1: string = 'Description'
  @Input()
  textinput_placeholder2: string = 'Prix'
  @Input()
  textinput_placeholder3: string = 'Image'
  @Input()
  textinput_placeholder4: string = 'IdMagasin'

  submitted = false;


  addProduitForm=new FormGroup({
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
    if (this.addProduitForm.invalid) {
      return;
    }
    const obj:Produits = {
      produit_id:null ,
      description_produit: this.addProduitForm.value.Description,
      nom_produit: this.addProduitForm.value.nomProduit,
      prix_produit:Number(this.addProduitForm.value.prix),
      magasin_id:Number(this.addProduitForm.value.idMagasin),
      imgsrc: null
    }
    console.log(obj)

    this.produitService.addProduit(obj).subscribe({
      next:response=>{
        console.log(response)
        this.router.navigate(['/','monitoring-page-read'])
      },
      error:error=>console.log(error)
    });
  }
}
