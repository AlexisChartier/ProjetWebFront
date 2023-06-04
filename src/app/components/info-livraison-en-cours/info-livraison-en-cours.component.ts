import { Component, Input } from '@angular/core'

@Component({
  selector: 'info-livraison-en-cours',
  templateUrl: 'info-livraison-en-cours.component.html',
  styleUrls: ['info-livraison-en-cours.component.css'],
})
export class InfoLivraisonEnCours {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Date'
  @Input()
  text2: string = 'Adresse de livraison'
  @Input()
  text3: string = 'Valider la livraison'
  constructor() {}
}
