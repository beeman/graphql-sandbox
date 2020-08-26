import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebPageModule } from '@kikstart-ui/layout-web'
import { UiHeroModule } from '@kikstart-ui/ui-hero'

import { LoginComponent } from './login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    WebPageModule,
    UiHeroModule,
  ],
})
export class LoginModule {}
