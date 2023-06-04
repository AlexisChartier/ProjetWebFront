import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'livraison-page',
  templateUrl: 'livraison-page.component.html',
  styleUrls: ['livraison-page.component.css'],
})
export class LivraisonPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Livraison')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Livraison',
      },
    ])
  }
}
