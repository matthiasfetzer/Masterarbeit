import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <!--The content below is only a placeholder and can be replaced.-->
      <div id="menu">
          <h2>Angular Projekt</h2>
          <hr>
            <a routerLink="/">Dashboard</a>
            <a routerLink="/highlight">Highlight</a>
            <a routerLink="/multiplechoice">Multiplechoice</a>
            <a routerLink="/performance">Performance</a>
           <hr>
      </div>
      <router-outlet></router-outlet>
  `  
  ,
  styles: [`
    #menu {
      text-align: center;
    }
    a {
      padding-left: 10px;
      
    }

  `]
})
export class AppComponent {
  title = 'angular-example';
}
