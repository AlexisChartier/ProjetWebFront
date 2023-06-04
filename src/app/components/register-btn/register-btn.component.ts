import { Component, Input } from '@angular/core'
import {STRINGS} from "../../strings.module";

@Component({
  selector: 'register-btn',
  templateUrl: 'register-btn.component.html',
  styleUrls: ['register-btn.component.css'],
})
export class RegisterBtn {
  private serverUrl = STRINGS.serverUrl;
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Créer un compte'
  @Input()
  linkUrl: string = this.serverUrl + "/register-hub"; // Ajoutez cette ligne pour définir l'URL du lien
  constructor() {}
}
