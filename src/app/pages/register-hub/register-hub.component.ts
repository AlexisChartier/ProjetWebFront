import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'register-hub',
  templateUrl: 'register-hub.component.html',
  styleUrls: ['register-hub.component.css'],
})
export class RegisterHub {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('RegisterHub - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'RegisterHub - DeliveryGo',
      },
    ])
  }
}
