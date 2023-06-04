import { Component, Input } from '@angular/core'
import {AuthService} from "../../auth.service";

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {

  @Input()
  text4: string = 'Blog'
  @Input()
  text3: string = 'Panier'
  @Input()
  text31: string = 'Déconnexion'
  @Input()
  text1: string = 'Commander'
  @Input()
  text2: string = 'Profil'
  @Input()
  rootClassName: string = ''

  constructor(private auth: AuthService) {}

  onClick():void{
    this.auth.logout()
  }
}
