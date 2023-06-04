import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditVendeur } from './edit-vendeur.component'

const routes = [
  {
    path: '',
    component: EditVendeur,
  },
]

@NgModule({
  declarations: [EditVendeur],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditVendeur],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditVendeurModule {}
