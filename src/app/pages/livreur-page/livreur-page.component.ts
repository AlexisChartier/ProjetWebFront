import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'livreur-page',
  templateUrl: 'livreur-page.component.html',
  styleUrls: ['livreur-page.component.css'],
})
export class LivreurPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('LivreurPage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'LivreurPage - DeliveryGo',
      },
    ])
  }
}
