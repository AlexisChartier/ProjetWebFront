import { Component, Input } from '@angular/core'

@Component({
  selector: 'header-vendeur',
  templateUrl: 'header-vendeur.component.html',
  styleUrls: ['header-vendeur.component.css'],
})
export class HeaderVendeur {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
