import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    header { position: fixed; z-index: 5; top: 0; left: 0; right: 0; box-shadow: rgb(0,0,0,0.5) 1px 1px 5px 3px }
  `]
})
export class NavBarComponent {
  public isCollapsed = true;
}
