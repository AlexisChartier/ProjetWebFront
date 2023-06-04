import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.css'],
})
export class ErrorPage {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ErrorPage - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ErrorPage - DeliveryGo',
      },
    ])
  }
}
