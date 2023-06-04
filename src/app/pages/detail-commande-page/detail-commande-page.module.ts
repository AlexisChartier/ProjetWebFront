import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { DetailCommandePage } from './detail-commande-page.component'

const routes = [
  {
    path: '',
    component: DetailCommandePage,
  },
]

@NgModule({
  declarations: [DetailCommandePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DetailCommandePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailCommandePageModule {}
