import { Injectable } from '@angular/core'
import { FetchResult } from '@apollo/client'
import { BehaviorSubject, Observable } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'
import { ApolloAngularSDK, AuthLoginInput, AuthRegisterInput, LoginMutation, RegisterMutation, User } from '@sdk'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSubject = new BehaviorSubject<User | null>(null)
  private readonly tokenSubject = new BehaviorSubject<string | null>(null)

  constructor(private readonly sdk: ApolloAngularSDK) {}

  public get loggedIn$(): Observable<boolean> {
    return this.userSubject.asObservable().pipe(map((user) => !!user))
  }
  public get user$(): Observable<User | null> {
    return this.userSubject.asObservable()
  }

  public storeData(user: User, token: string): void {
    this.userSubject.next(user)
    this.tokenSubject.next(token)
  }

  public login(input: AuthLoginInput): Observable<FetchResult<LoginMutation>> {
    return this.sdk.login({ input }).pipe(
      tap((res) => {
        if (res?.data?.login) {
          this.storeData(res.data.login.user, res.data.login.token)
        }
      }),
    )
  }

  public register(input: AuthRegisterInput): Observable<FetchResult<RegisterMutation>> {
    return this.sdk.register({ input }).pipe(
      tap((res) => {
        if (res?.data?.register) {
          this.storeData(res.data.register.user, res.data.register.token)
        }
      }),
    )
  }
}
