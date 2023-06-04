import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'magasin-page',
  templateUrl: 'magasin-page.component.html',
  styleUrls: ['magasin-page.component.css'],
})
export class MagasinPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MagasinPage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'MagasinPage - DeliveryGo',
      },
    ])
  }
}
