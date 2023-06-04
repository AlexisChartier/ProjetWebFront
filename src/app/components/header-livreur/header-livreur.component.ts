import { Component, Input } from '@angular/core'

@Component({
  selector: 'header-livreur',
  templateUrl: 'header-livreur.component.html',
  styleUrls: ['header-livreur.component.css'],
})
export class HeaderLivreur {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
