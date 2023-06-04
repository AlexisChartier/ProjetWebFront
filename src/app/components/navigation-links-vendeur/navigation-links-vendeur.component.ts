import { Component, Input } from '@angular/core'
import {AuthService} from "../../auth.service";

@Component({
  selector: 'navigation-links-vendeur',
  templateUrl: 'navigation-links-vendeur.component.html',
  styleUrls: ['navigation-links-vendeur.component.css'],
})
export class NavigationLinksVendeur{
  @Input()
  text1: string = 'Accueil'
  @Input()
  text31: string = 'Déconnexion'
  @Input()
  rootClassName: string = ''

  constructor(private auth:AuthService) {}

  onClick():void{
    this.auth.logout()
  }
}
