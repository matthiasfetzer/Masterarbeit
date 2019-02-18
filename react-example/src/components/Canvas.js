import React from 'react'


export default class Canvas extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }


    componentDidMount() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(31, 31, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle="red";
        ctx.fill();  
    }

    render() {
      return (
        <div>
          <canvas ref={this.canvasRef} />
        </div>
      );
    }
  }