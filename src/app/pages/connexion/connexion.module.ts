import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Connexion } from './connexion.component'

const routes = [
  {
    path: '',
    component: Connexion,
  },
]

@NgModule({
  declarations: [Connexion],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Connexion],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConnexionModule {}
