import { Component, Input } from '@angular/core'

@Component({
  selector: 'infos-commande-panier',
  templateUrl: 'infos-commande-panier.component.html',
  styleUrls: ['infos-commande-panier.component.css'],
})
export class InfosCommandePanier {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Montant'
  constructor() {}
}
