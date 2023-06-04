import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LivreurPage } from './livreur-page.component'

const routes = [
  {
    path: '',
    component: LivreurPage,
  },
]

@NgModule({
  declarations: [LivreurPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LivreurPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LivreurPageModule {}
