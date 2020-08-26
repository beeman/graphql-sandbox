import { Component } from '@angular/core'

@Component({
  selector: 'app-layout',
  template: `
    <web-layout>
      <web-header>
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
  public links = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login' },
  ]
  public copyright = `Copyright <a href="https://kikstart.dev" target="_blank">kikstart</a> &copy; ${new Date().getFullYear()}`
}
