import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  text: string = '© 2023 DeliveryGo, All Rights Reserved.'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
