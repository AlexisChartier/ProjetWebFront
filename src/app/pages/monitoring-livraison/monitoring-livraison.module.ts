import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { MonitoringLivraison } from './monitoring-livraison.component'

const routes = [
  {
    path: '',
    component: MonitoringLivraison,
  },
]

@NgModule({
  declarations: [MonitoringLivraison],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MonitoringLivraison],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MonitoringLivraisonModule {}
