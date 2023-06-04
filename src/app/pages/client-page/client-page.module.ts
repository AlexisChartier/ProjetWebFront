import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ClientPage } from './client-page.component'

const routes = [
  {
    path: '',
    component: ClientPage,
  },
]

@NgModule({
  declarations: [ClientPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ClientPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientPageModule {}
