import { Component, Input } from '@angular/core'

@Component({
  selector: 'add-prod--form',
  templateUrl: 'add-prod--form.component.html',
  styleUrls: ['add-prod--form.component.css'],
})
export class AddProdVForm {
  @Input()
  textinput_placeholder: string = 'Nom produit'
  @Input()
  textinput_placeholder1: string = 'Libellé'
  @Input()
  textinput_placeholder2: string = 'Montant'
  constructor() {}
}
