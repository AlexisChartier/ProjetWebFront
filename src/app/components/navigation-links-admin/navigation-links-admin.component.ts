import { Component, Input } from '@angular/core'
import {AuthService} from "../../auth.service";

@Component({
  selector: 'navigation-links-admin',
  templateUrl: 'navigation-links-admin.component.html',
  styleUrls: ['navigation-links-admin.component.css'],
})
export class NavigationLinksAdmin {
  @Input()
  text1: string = 'Infos'
  @Input()
  text31: string = 'Déconnexion'
  @Input()
  rootClassName: string = ''

  @Input()
  text2: string = 'Ajouter'
  constructor(private auth:AuthService) {}

  onClick():void{
    this.auth.logout()
  }
}
