import { Component, Input } from '@angular/core'

@Component({
  selector: 'commande-dispo',
  templateUrl: 'commande-dispo.component.html',
  styleUrls: ['commande-dispo.component.css'],
})
export class CommandeDispo {
  @Input()
  text: string = 'Nom Restau'
  @Input()
  text1: string = 'Date'
  @Input()
  text2: string = 'Adresse livraison'
  @Input()
  text3: string = 'Prendre en charge'
  constructor() {}
}
