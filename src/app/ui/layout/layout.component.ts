import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthService } from '../../auth/auth.service'

@Component({
  selector: 'app-layout',
  template: `
    <web-layout>
      <web-header *ngIf="links$ | async as links">
        <ui-navbar
          [navbarStyle]="$any('dark grd-kikstart-2')"
          [title]="title"
          [logo]="logo"
          [links]="links"
        ></ui-navbar>
      </web-header>

      <router-outlet></router-outlet>

      <footer class="bg-dark grd-kikstart-2">
        <small class="d-block py-3 text-center text-muted" [innerHTML]="copyright"></small>
      </footer>
    </web-layout>
  `,
})
export class LayoutComponent {
  public logo = 'assets/logo.png'
  public title = 'GraphQL Sandbox'
  public copyright = `Copyright <a href="https://kikstart.dev" target="_blank">kikstart</a> &copy; ${new Date().getFullYear()}`
  public links$: Observable<{ path: string; label: string }[]> = this.auth.user$.pipe(
    map((user) =>
      user
        ? [
            { path: '/', label: 'Home' },
            { path: '/logout', label: 'Log out' },
          ]
        : [{ path: '/login', label: 'Log in' }],
    ),
  )

  constructor(private readonly auth: AuthService) {}
}
