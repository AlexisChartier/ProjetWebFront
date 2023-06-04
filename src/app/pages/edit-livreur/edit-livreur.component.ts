import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'edit-livreur',
  templateUrl: 'edit-livreur.component.html',
  styleUrls: ['edit-livreur.component.css'],
})
export class EditLivreur {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('EditLivreur - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'EditLivreur - DeliveryGo',
      },
    ])
  }
}
