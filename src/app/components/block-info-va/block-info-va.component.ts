import { Component, Input } from '@angular/core'

@Component({
  selector: 'block-info-va',
  templateUrl: 'block-info-va.component.html',
  styleUrls: ['block-info-va.component.css'],
})
export class BlockInfoVA {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
