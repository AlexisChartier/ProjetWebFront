import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { MonitoringPageRead } from './monitoring-page-read.component'

const routes = [
  {
    path: '',
    component: MonitoringPageRead,
  },
]

@NgModule({
  declarations: [MonitoringPageRead],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MonitoringPageRead],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MonitoringPageReadModule {}
