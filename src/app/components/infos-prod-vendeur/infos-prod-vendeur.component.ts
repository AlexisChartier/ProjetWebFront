import { Component, Input } from '@angular/core'
import {Produits} from "../../produits";
import {ProduitService} from "../../produit.service";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'infos-prod-vendeur',
  templateUrl: 'infos-prod-vendeur.component.html',
  styleUrls: ['infos-prod-vendeur.component.css'],
})
export class InfosProdVendeur {
  produits:Produits[]
  @Input()
  text: string = 'Libellé'
  @Input()
  text1: string = 'Montant'
  @Input()
  text2: string = 'Supprimer'
  @Input()
  text3: string = 'Editer'
  @Input()
  image_src: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  image_alt: string = 'image'
  constructor(private produitService:ProduitService, private auth:AuthService, private router:Router) {}

  ngOnInit(){
    this.produitService.getProduitByMagasinId(this.auth.getMagasinIdVendeur()).subscribe({
      next:response=>{
        this.produits = response
      },
      error:error=>console.log(error)
    })
  }

  onClickSuppr(id){
    this.produitService.deleteProduit(id).subscribe({
      next:response =>{
        console.log(response)
      },
      error:error => console.log(error),
    })
  }
  onClickEdit(id){
    this.auth.produitIdEdit = id
    this.router.navigate(['/','edit-produit'])
  }
}
