import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ErrorPage } from './error-page.component'

const routes = [
  {
    path: '',
    component: ErrorPage,
  },
]

@NgModule({
  declarations: [ErrorPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ErrorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorPageModule {}
