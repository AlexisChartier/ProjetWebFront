import { Component, Input } from '@angular/core'

@Component({
  selector: 'block-info-ma',
  templateUrl: 'block-info-ma.component.html',
  styleUrls: ['block-info-ma.component.css'],
})
export class BlockInfoMA {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
