import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { EditProduit } from './edit-produit.component'

const routes = [
  {
    path: '',
    component: EditProduit,
  },
]

@NgModule({
  declarations: [EditProduit],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [EditProduit],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditProduitModule {}
