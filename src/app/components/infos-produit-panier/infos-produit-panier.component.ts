import { Component, Input } from '@angular/core'

@Component({
  selector: 'infos-produit-panier',
  templateUrl: 'infos-produit-panier.component.html',
  styleUrls: ['infos-produit-panier.component.css'],
})
export class InfosProduitPanier {
  @Input()
  text: string = 'Libellé'
  @Input()
  text1: string = 'Montant'
  @Input()
  text2: string = 'Supprimer'
  @Input()
  text3: string = 'Quantité'
  @Input()
  text4: string = '1'
  @Input()
  text5: string = '2'
  @Input()
  text6: string = '3'
  @Input()
  text7: string = '4'
  constructor() {}
}
