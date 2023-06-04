import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'edit-profil',
  templateUrl: 'edit-profil.component.html',
  styleUrls: ['edit-profil.component.css'],
})
export class EditProfil {
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
