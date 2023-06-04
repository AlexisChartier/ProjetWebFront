import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'edit-produit',
  templateUrl: 'edit-produit.component.html',
  styleUrls: ['edit-produit.component.css'],
})
export class EditProduit {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('EditProduit - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'EditProduit - DeliveryGo',
      },
    ])
  }
}
