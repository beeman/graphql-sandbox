import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WebPageModule } from '@kikstart-ui/layout-web'
import { UiHeroModule } from '@kikstart-ui/ui-hero'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, WebPageModule, UiHeroModule],
})
export class HomeModule {}
