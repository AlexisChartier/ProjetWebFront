import { Component, Input } from '@angular/core'

@Component({
  selector: 'block-info-ca',
  templateUrl: 'block-info-ca.component.html',
  styleUrls: ['block-info-ca.component.css'],
})
export class BlockInfoCA {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
