import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { PanierPage } from './panier-page.component'

const routes = [
  {
    path: '',
    component: PanierPage,
  },
]

@NgModule({
  declarations: [PanierPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PanierPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PanierPageModule {}
