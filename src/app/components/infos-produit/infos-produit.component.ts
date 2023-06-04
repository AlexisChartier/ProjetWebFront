import { Component, Input } from '@angular/core'
import {ProduitService} from "../../produit.service";
import {AuthService} from "../../auth.service";
import {Produits} from "../../produits";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'infos-produit',
  templateUrl: 'infos-produit.component.html',
  styleUrls: ['infos-produit.component.css'],
})
export class InfosProduit {

  produits:Produits[];

  idMagasin: number;

  @Input()
  text: string =
    'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
  @Input()
  Rectangle1_src: string = '/assets/external/rectangle1i189-ymjj-200h.png'
  @Input()
  Rectangle1_alt: string = 'Rectangle1I189'
  @Input()
  text1: string = 'Quantité'
  @Input()
  text2: string = '1'
  @Input()
  text3: string = '2'
  @Input()
  text4: string = '3'
  @Input()
  text5: string = '4'
  constructor(private produitService:ProduitService, private auth:AuthService, private router: Router) {}

  ngOnInit(){
    this.getEntities()
  }

  getEntities(){
    this.idMagasin = this.auth.getMagasinDetailId()
    this.produitService.getProduitByMagasinId(this.idMagasin).subscribe({
      next:response =>{
        this.produits = response
      },
      error:error=>console.log(error)
    })
  }
}
