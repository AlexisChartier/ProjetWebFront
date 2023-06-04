import { Component, Input } from '@angular/core'

@Component({
  selector: 'infos-commande-active',
  templateUrl: 'infos-commande-active.component.html',
  styleUrls: ['infos-commande-active.component.css'],
})
export class InfosCommandeActive {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Date'
  @Input()
  text2: string = 'Montant'
  @Input()
  text3: string = 'En attente'
  constructor() {}
}
