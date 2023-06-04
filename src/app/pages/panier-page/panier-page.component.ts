import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'panier-page',
  templateUrl: 'panier-page.component.html',
  styleUrls: ['panier-page.component.css'],
})
export class PanierPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('PanierPage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'PanierPage - DeliveryGo',
      },
    ])
  }
}
