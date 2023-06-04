import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'monitoring-livraison',
  templateUrl: 'monitoring-livraison.component.html',
  styleUrls: ['monitoring-livraison.component.css'],
})
export class MonitoringLivraison {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MonitoringLivraison - DeliveryGo')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'MonitoringLivraison - DeliveryGo',
      },
    ])
  }
}
