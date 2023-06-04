import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'vendeur-page',
  templateUrl: 'vendeur-page.component.html',
  styleUrls: ['vendeur-page.component.css'],
})
export class VendeurPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('VendeurPage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'VendeurPage - DeliveryGo',
      },
    ])
  }
}
