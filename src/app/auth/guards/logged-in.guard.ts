import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthService } from '../auth.service'

@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly service: AuthService) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.service.loggedIn$.pipe(
      map((loggedIn) => {
        if (!loggedIn) {
          return this.router.parseUrl('/login')
        }
        return true
      }),
    )
  }
}
