import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'edit-magasin',
  templateUrl: 'edit-magasin.component.html',
  styleUrls: ['edit-magasin.component.css'],
})
export class EditMagasin {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('EditMagasin - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'EditMagasin - DeliveryGo',
      },
    ])
  }
}
