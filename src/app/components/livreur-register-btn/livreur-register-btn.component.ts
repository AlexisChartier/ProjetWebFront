import { Component, Input } from '@angular/core'

@Component({
  selector: 'livreur-register-btn',
  templateUrl: 'livreur-register-btn.component.html',
  styleUrls: ['livreur-register-btn.component.css'],
})
export class LivreurRegisterBtn {
  @Input()
  text: string = 'Livreur'
  constructor() {}
}
