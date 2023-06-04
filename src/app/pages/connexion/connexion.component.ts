import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.component.html',
  styleUrls: ['connexion.component.css'],
})
export class Connexion {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Connexion')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Connexion',
      },
    ])
  }
}
