import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      Dies ist eine Beispiel Angular App, welcher Gegenstand eines Vergleichs von drei Single Page Applikationen ist.
    </p>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
