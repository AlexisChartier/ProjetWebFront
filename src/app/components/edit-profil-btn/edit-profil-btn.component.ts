import { Component, Input } from '@angular/core'

@Component({
  selector: 'edit-profil-btn',
  templateUrl: 'edit-profil-btn.component.html',
  styleUrls: ['edit-profil-btn.component.css'],
})
export class EditProfilBtn {
  @Input()
  text: string = 'Editer profil'
  constructor() {}

  onClick(){

  }
}
