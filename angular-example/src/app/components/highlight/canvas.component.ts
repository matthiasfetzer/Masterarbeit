import {
    Component, Input, ElementRef, AfterViewInit, ViewChild
  } from '@angular/core';
  import { fromEvent } from 'rxjs';
  import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
  
  @Component({
    selector: 'app-canvas',
    template: ' <div id="myCanvas"> <canvas #canvas></canvas> </div>' ,
    styles: [`
    #myCanvas {
        width: 100%;
        position: absolute;
        opacity : 0.5;
    }`]
  })
  export class CanvasComponent implements AfterViewInit {
  
    @ViewChild('canvas') public canvas: ElementRef;
    
    private cx: CanvasRenderingContext2D;
  
    public ngAfterViewInit() {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.cx = canvasEl.getContext('2d');
  
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;
  
      this.cx.lineWidth = 20;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = '#f7f700';
  
      this.captureEvents(canvasEl);
    }
    
    private captureEvents(canvasEl: HTMLCanvasElement) {
      // this will capture all mousedown events from the canvas element
      fromEvent(canvasEl, 'mousedown')
        .pipe(
          switchMap((e) => {
            // after a mouse down, we'll record all mouse moves
            return fromEvent(canvasEl, 'mousemove')
              .pipe(
                // we'll stop (and unsubscribe) once the user releases the mouse
                // this will trigger a 'mouseup' event    
                takeUntil(fromEvent(canvasEl, 'mouseup')),
                // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
                takeUntil(fromEvent(canvasEl, 'mouseleave')),
                // pairwise lets us get the previous value to draw a line from
                // the previous point to the current point    
                pairwise()
              )
          })
        )
        .subscribe((res: [MouseEvent, MouseEvent]) => {
          const rect = canvasEl.getBoundingClientRect();
    
          // previous and current position with the offset
          const prevPos = {
            x: res[0].clientX - rect.left,
            y: res[0].clientY - rect.top
          };
    
          const currentPos = {
            x: res[1].clientX - rect.left,
            y: res[1].clientY - rect.top
          };
    
          // this method we'll implement soon to do the actual drawing
          this.drawOnCanvas(prevPos, currentPos);
        });
    }
  
    private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
      if (!this.cx) { return; }
  
      this.cx.beginPath();
  
      if (prevPos) {
        this.cx.moveTo(prevPos.x, prevPos.y); // from
        this.cx.lineTo(currentPos.x, currentPos.y);
        this.cx.stroke();
      }
    }
  
  }
  