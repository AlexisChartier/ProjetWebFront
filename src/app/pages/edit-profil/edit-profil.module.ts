import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditProfil } from './edit-profil.component'

const routes = [
  {
    path: '',
    component: EditProfil,
  },
]

@NgModule({
  declarations: [EditProfil],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditProfil],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditProfilModule {}
