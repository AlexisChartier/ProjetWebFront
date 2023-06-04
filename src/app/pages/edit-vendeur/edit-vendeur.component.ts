import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'edit-vendeur',
  templateUrl: 'edit-vendeur.component.html',
  styleUrls: ['edit-vendeur.component.css'],
})
export class EditVendeur {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Modifier le profil')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Modifier le profil',
      },
    ])
  }
}
