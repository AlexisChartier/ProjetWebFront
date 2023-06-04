import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'detail-commande-page',
  templateUrl: 'detail-commande-page.component.html',
  styleUrls: ['detail-commande-page.component.css'],
})
export class DetailCommandePage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Détail commande')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Détail commande',
      },
    ])
  }
}
