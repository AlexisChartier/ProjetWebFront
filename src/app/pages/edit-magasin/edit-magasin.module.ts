import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditMagasin } from './edit-magasin.component'

const routes = [
  {
    path: '',
    component: EditMagasin,
  },
]

@NgModule({
  declarations: [EditMagasin],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditMagasin],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditMagasinModule {}
