import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { HistoriqueCommandePage } from './historique-commande-page.component'

const routes = [
  {
    path: '',
    component: HistoriqueCommandePage,
  },
]

@NgModule({
  declarations: [HistoriqueCommandePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [HistoriqueCommandePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HistoriqueCommandePageModule {}
