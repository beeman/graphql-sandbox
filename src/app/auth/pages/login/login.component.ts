import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  template: `
    <web-page>
      <div class="h-100  align-items-center">
        <ui-hero
          class="grd-kikstart-2 mx-3 mx-md-5"
          title="Web Layout"
          description="The Web layout is a standard header/content/footer layout"
          [link]="{
            label: 'Other layouts',
            path: '/layouts',
            icon: 'fa-arrow-left',
            className: 'btn btn-lg  border-pink-100 text-pink-100'
          }"
        ></ui-hero>
      </div>
    </web-page>
  `,
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
