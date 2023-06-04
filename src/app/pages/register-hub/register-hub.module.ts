import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { RegisterHub } from './register-hub.component'

const routes = [
  {
    path: '',
    component: RegisterHub,
  },
]

@NgModule({
  declarations: [RegisterHub],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [RegisterHub],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterHubModule {}
