import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance_canvas',
  template: `
      <div id="canvasContainer">
        <canvas #canvasEl width="100px" height="100px"> </canvas>
      </div>
  `,
  styles: []
})
export class Performance_canvasComponent implements OnInit {

  @ViewChild('canvasEl') canvasEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  
      var canvas = this.canvasEl.nativeElement.getContext('2d');
      canvas.beginPath();
      canvas.arc(31, 31, 30, 0, 2 * Math.PI);
      canvas.stroke();
      canvas.fillStyle="red";
      canvas.fill();  
  }

}
