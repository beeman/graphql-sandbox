import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebPageModule } from '@kikstart-ui/layout-web'
import { UiButtonModule } from '@kikstart-ui/ui-button'
import { UiCardModule } from '@kikstart-ui/ui-card'
import { UiFormModule } from '@kikstart-ui/ui-form'
import { UiHeroModule } from '@kikstart-ui/ui-hero'

import { LoginComponent } from './login.component'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
    WebPageModule,
    UiHeroModule,
    UiFormModule,
    UiCardModule,
    UiButtonModule,
  ],
})
export class LoginModule {}
