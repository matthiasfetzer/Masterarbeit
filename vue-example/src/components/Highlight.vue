<template>
  <div class="highlight">
      <p>Highlight Component</p>
      <canvas id="canvas" ></canvas>
      <div id="text"> {{ highlightText }}</div>
  </div>
</template>

<script>
import HighlightText from '../assets/HighlightText.js'




export default {
  
  name: 'highlight',
    data: function () {
      return {
        highlightText: HighlightText.TEXT
      }
    },
    methods: {
        updateCanvas: function (){

          var canvas = document.getElementById('canvas');
      

          var ctx = canvas.getContext('2d');
          resize();

          // last known position
          var pos = { x: 0, y: 0 };

          canvas.addEventListener('resize', resize);
          canvas.addEventListener('mousemove', draw);
          canvas.addEventListener('mousedown', setPosition);
          canvas.addEventListener('mouseenter', setPosition);

          // new position from mouse event
          function setPosition(e) {
            pos.x = e.clientX;
            pos.y = e.clientY;
          }

          // resize canvas
          function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
          }

          function draw(e) {
            // mouse left button must be pressed
            if (e.buttons !== 1) return;
            ctx.beginPath(); // begin
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#f7f700';
            //  Workaround with -35 because of style top 35px -> better varable with v-bind style -> Todo
            ctx.moveTo(pos.x, pos.y -35); // from 
            setPosition(e);
            ctx.lineTo(pos.x, pos.y -35); // to
            ctx.stroke(); // draw it!
          }
      }
    },
    mounted: function (){
      this.updateCanvas();
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#text,
#canvas {
    position: absolute;
    top: 35px;
    left: 0;
    opacity : 0.5;
    width: 100%;
    height: 100%;
}
#text {
    z-index: -1;
    opacity : 1;
    padding: 10%;
    width: 80%;
    text-align: left;
}
</style>
