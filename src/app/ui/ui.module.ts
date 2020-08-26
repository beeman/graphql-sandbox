import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebFooterModule, WebHeaderModule, WebLayoutModule } from '@kikstart-ui/layout-web'
import { UiNavbarModule } from '@kikstart-ui/ui-navbar'
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, WebLayoutModule, RouterModule, WebHeaderModule, WebFooterModule, UiNavbarModule],
})
export class UiModule {}
