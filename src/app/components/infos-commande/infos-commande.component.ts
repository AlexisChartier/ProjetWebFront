import { Component, Input } from '@angular/core'

@Component({
  selector: 'infos-commande',
  templateUrl: 'infos-commande.component.html',
  styleUrls: ['infos-commande.component.css'],
})
export class InfosCommande {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Date'
  @Input()
  text2: string = 'Montant'
  @Input()
  text3: string = 'Détails'
  constructor() {}
}
