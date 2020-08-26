import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule) },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthModule {}
