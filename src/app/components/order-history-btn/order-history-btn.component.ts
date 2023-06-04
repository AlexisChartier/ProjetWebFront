import { Component, Input } from '@angular/core'

@Component({
  selector: 'order-history-btn',
  templateUrl: 'order-history-btn.component.html',
  styleUrls: ['order-history-btn.component.css'],
})
export class OrderHistoryBtn {
  @Input()
  text: string = 'Historique des commandes'
  constructor() {}

  onClick(){}
}
