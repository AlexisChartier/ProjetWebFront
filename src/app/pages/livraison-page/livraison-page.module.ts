import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LivraisonPage } from './livraison-page.component'

const routes = [
  {
    path: '',
    component: LivraisonPage,
  },
]

@NgModule({
  declarations: [LivraisonPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LivraisonPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LivraisonPageModule {}
