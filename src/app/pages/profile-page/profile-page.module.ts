import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { ProfilePage } from './profile-page.component'

const routes = [
  {
    path: '',
    component: ProfilePage,
  },
]

@NgModule({
  declarations: [ProfilePage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [ProfilePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilePageModule {}
