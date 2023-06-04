import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'historique-commande-page',
  templateUrl: 'historique-commande-page.component.html',
  styleUrls: ['historique-commande-page.component.css'],
})
export class HistoriqueCommandePage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Historique des commandes')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Historique des commandes',
      },
    ])
  }
}
