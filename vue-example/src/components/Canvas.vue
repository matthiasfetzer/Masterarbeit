<template>
    <div id="canvasContainer">
            <canvas ref="myCanvas" width="100px" height="100px" />

    </div>
</template>

<script>
    
        export default {
            name : 'canvasContainer',

            mounted() {
                const ctx = this.$refs.myCanvas.getContext('2d');
                ctx.beginPath();
                ctx.arc(31, 31, 30, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle="red";
                ctx.fill();  
            }
         }
</script>

