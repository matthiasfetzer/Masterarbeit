import { Component, OnInit } from '@angular/core';
import { AppConstantsModule } from './../../app-constants.module';


@Component({
  selector: 'app-highlight',
  template: `
    <p>
      <app-canvas></app-canvas>
      {{ highlightText }}
    </p>
  `,
  styles: []
})
export class HighlightComponent implements OnInit {

  highlightText = '';
  constructor() { }

  ngOnInit() {
    this.highlightText = AppConstantsModule.HIGHLIGHTTEXT
  }

}
