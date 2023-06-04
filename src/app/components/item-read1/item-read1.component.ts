import { Component, Input } from '@angular/core'

@Component({
  selector: 'item-read1',
  templateUrl: 'item-read1.component.html',
  styleUrls: ['item-read1.component.css'],
})
export class ItemRead1 {
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  label: string = 'ENTERPRISE'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000'
  @Input()
  image_alt: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200'
  @Input()
  profile_alt: string = 'profile'
  @Input()
  title: string = 'Lorem ipsum dolor sit amet'
  @Input()
  author: string = 'Jon Doe'
  @Input()
  time: string = '5 min read'
  constructor() {}
}
