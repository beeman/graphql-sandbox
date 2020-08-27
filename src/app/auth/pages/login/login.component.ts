import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { UiButton } from '@kikstart-ui/ui-button'
import { FormHelper } from '@kikstart-ui/ui-form'
import { AuthService } from '../../auth.service'
import { AuthLoginInput } from '@sdk'

@Component({
  selector: 'app-login',
  template: `
    <web-page>
      <div class="h-100 py-3 py-md-5">
        <div class="col-md-6 offset-md-3">
          <ui-card>
            <ui-card-header title="Log in to Kikstart"></ui-card-header>
            <ui-card-body>
              <ui-form [fields]="fields" [model]="model" [form]="form" (action)="login()"></ui-form>
            </ui-card-body>
            <ui-card-footer>
              <div class="d-flex justify-content-between w-100">
                <ui-button [disabled]="!form.valid" [button]="btnLogin"></ui-button>
                <ui-button [button]="btnRegister"></ui-button>
              </div>
            </ui-card-footer>
          </ui-card>
        </div>
      </div>
    </web-page>
  `,
})
export class LoginComponent {
  public form = new FormGroup({})
  public fields = [
    FormHelper.input('username', { label: 'Username', required: true }),
    FormHelper.password('password', { label: 'Password', required: true }),
  ]
  public model: AuthLoginInput = {
    username: '',
    password: '',
  }
  public btnLogin: UiButton = {
    className: 'btn btn-outline-success',
    label: 'Log in',
    handler: () => this.login(),
  }
  public btnRegister: UiButton = {
    className: 'btn btn-outline-info',
    label: 'Register',
    path: '/register',
  }

  constructor(private readonly router: Router, private readonly service: AuthService) {}

  login(): void {
    this.service.login(this.model).subscribe(
      () => this.router.navigate(['/']),
      (err) => {
        alert(err)
        console.log('err!', err)
      },
    )
  }
}
