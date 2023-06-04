import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'monitoring-page-read',
  templateUrl: 'monitoring-page-read.component.html',
  styleUrls: ['monitoring-page-read.component.css'],
})
export class MonitoringPageRead {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MonitoringPageRead - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'MonitoringPageRead - DeliveryGo',
      },
    ])
  }
}
