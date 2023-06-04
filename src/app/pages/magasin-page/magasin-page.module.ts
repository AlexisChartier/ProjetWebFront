import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { MagasinPage } from './magasin-page.component'

const routes = [
  {
    path: '',
    component: MagasinPage,
  },
]

@NgModule({
  declarations: [MagasinPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MagasinPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MagasinPageModule {}
