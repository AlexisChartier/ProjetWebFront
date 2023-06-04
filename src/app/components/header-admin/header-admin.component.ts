import { Component, Input } from '@angular/core'

@Component({
  selector: 'header-admin',
  templateUrl: 'header-admin.component.html',
  styleUrls: ['header-admin.component.css'],
})
export class HeaderAdmin {
  @Input()
  rootClassName: string = ''
  constructor() {}
}
