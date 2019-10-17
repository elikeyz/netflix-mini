import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
  .errorMessage {
    margin-top:150px;
    font-size: 170px;
    text-align: center;
  }
  `]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
