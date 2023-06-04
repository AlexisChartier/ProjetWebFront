import { Component, Input } from '@angular/core'

@Component({
  selector: 'add-prod-btn-vend',
  templateUrl: 'add-prod-btn-vend.component.html',
  styleUrls: ['add-prod-btn-vend.component.css'],
})
export class AddProdBtnVend {
  @Input()
  text: string = 'Ajouter le produit'
  constructor() {}
}
