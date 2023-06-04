import { Component, Input } from '@angular/core'

@Component({
  selector: 'order-btn2',
  templateUrl: 'order-btn2.component.html',
  styleUrls: ['order-btn2.component.css'],
})
export class OrderBtn2 {
  @Input()
  text: string = 'Commander'
  constructor() {}
}
