import { Component, Input } from '@angular/core'

@Component({
  selector: 'contenu-commande',
  templateUrl: 'contenu-commande.component.html',
  styleUrls: ['contenu-commande.component.css'],
})
export class ContenuCommande {
  @Input()
  text: string = 'Libellé'
  @Input()
  text1: string = 'Montant'
  @Input()
  text2: string = 'Quantité'
  constructor() {}
}
