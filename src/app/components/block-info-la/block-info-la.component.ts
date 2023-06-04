import { Component, Input } from '@angular/core'

@Component({
  selector: 'block-info-la',
  templateUrl: 'block-info-la.component.html',
  styleUrls: ['block-info-la.component.css'],
})
export class BlockInfoLA {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
