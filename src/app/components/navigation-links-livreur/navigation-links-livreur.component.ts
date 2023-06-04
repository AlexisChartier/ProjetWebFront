import { Component, Input } from '@angular/core'
import {AuthService} from "../../auth.service";

@Component({
  selector: 'navigation-links-livreur',
  templateUrl: 'navigation-links-livreur.component.html',
  styleUrls: ['navigation-links-livreur.component.css'],
})
export class NavigationLinksLivreur {
  @Input()
  text1: string = 'Accueil'
  @Input()
  text31: string = 'Déconnexion'
  @Input()
  rootClassName: string = ''

  @Input()
  text3: string = 'Commande active'
  constructor(private auth:AuthService) {}

  onClick():void{
    this.auth.logout();
  }
}
