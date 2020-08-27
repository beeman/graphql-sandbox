import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoggedInGuard } from './auth/guards/logged-in.guard'
import { LayoutComponent } from './ui/layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: '',
        canActivate: [LoggedInGuard],
        children: [{ path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }],
      },
      { path: '', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
