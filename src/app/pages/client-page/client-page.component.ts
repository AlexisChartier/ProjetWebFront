import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'client-page',
  templateUrl: 'client-page.component.html',
  styleUrls: ['client-page.component.css'],
})
export class ClientPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Commander')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Commander',
      },
    ])
  }
}
