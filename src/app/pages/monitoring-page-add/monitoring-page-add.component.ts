import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'monitoring-page-add',
  templateUrl: 'monitoring-page-add.component.html',
  styleUrls: ['monitoring-page-add.component.css'],
})
export class MonitoringPageAdd {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MonitoringPageAdd - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'MonitoringPageAdd - DeliveryGo',
      },
    ])
  }
}
