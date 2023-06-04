import { Component, Input } from '@angular/core'
import{STRINGS} from "../../strings.module";

@Component({
  selector: 'login-btn',
  templateUrl: 'login-btn.component.html',
  styleUrls: ['login-btn.component.css'],
})
export class LoginBtn {
  private serverUrl = STRINGS.serverUrl;
  @Input()
  text2: string = 'Connexion'
  @Input()
  rootClassName: string = ''
  @Input()
  linkUrl: string = this.serverUrl + "/login"; // Ajoutez cette ligne pour définir l'URL du lien
  constructor() {}
}
