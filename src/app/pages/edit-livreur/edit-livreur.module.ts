import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditLivreur } from './edit-livreur.component'

const routes = [
  {
    path: '',
    component: EditLivreur,
  },
]

@NgModule({
  declarations: [EditLivreur],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditLivreur],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditLivreurModule {}
