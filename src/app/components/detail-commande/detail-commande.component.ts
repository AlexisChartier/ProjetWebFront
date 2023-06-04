import { Component, Input } from '@angular/core'

@Component({
  selector: 'detail-commande',
  templateUrl: 'detail-commande.component.html',
  styleUrls: ['detail-commande.component.css'],
})
export class DetailCommande {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Date'
  @Input()
  text2: string = 'Montant'
  constructor() {}
}
