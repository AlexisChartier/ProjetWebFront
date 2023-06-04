import { Component, Input } from '@angular/core'

@Component({
  selector: 'client-register-btn',
  templateUrl: 'client-register-btn.component.html',
  styleUrls: ['client-register-btn.component.css'],
})
export class ClientRegisterBtn {
  @Input()
  text: string = 'Client'
  constructor() {}
}
