import React from 'react'
import './Performancetest.css'
import Canvas from './Canvas'

class Performancetest extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {operations: '', rows: [], canvas: '', startCalc: null, startCalcOnClick: false, startTime: 0};
      }
    
    componentDidUpdate () {
        // For performance test -> after rendering has finished
        let endTime = performance.now()
        var executionTime = endTime - this.state.startTime
 
        if(this.state.startTime !== 0) {
            console.log(executionTime)
        }
    }


    insertCanvas = () => {
        if (this.state.startCalcOnClick){
            this.startCalculation()
        }
        let startTime = performance.now()
        this.setState({startTime: startTime})

        var numberOfCanvas = this.state.operations 
        this.setState({canvas: numberOfCanvas})
    }

    setOperations =(event)=> {
    const ops = event.target.value
    this.setState({operations : ops, startTime: 0})
    }

    insertNumbers =()=> {
        if (this.state.startCalcOnClick){
            this.startCalculation()
        }
        let startTime = performance.now()
        this.setState({startTime: startTime})

        var tempRows = this.state.rows
        var operations = this.state.operations

        // var temp = 0 //-> for debugging only
        for (let i=0;i < parseInt(operations, 10);i++){
            tempRows.push(Math.floor(1000 + Math.random() * 9000));
            //tempRows.push(temp++) //-> for debugging only
        }
        this.setState({rows: tempRows})
    }

    clear=()=> {
        var empty = []
        this.setState({rows: empty, canvas: '', startTime: 0})
    }

    swap =()=> {
        if (this.state.startCalcOnClick){
            this.startCalculation()
        }
        let startTime = performance.now()
        this.setState({startTime: startTime})

        var operations = parseInt(this.state.operations)+1
        var firstValue = 1
        var tempRows = this.state.rows
        var rowsLength = this.state.rows.length
        var inital = operations

        while (operations < rowsLength) {
            let  tempFirst = tempRows[firstValue];  // save fist entry to swap
            tempRows.splice(firstValue, 1, tempRows[operations]);
            tempRows.splice(operations, 1, tempFirst);
            //  console.log("swap index: "+first +"<- " + operations)
            //  console.log("swap index: "+operations +"<- " + first)
            firstValue=operations+1 // first as next entry
            operations=firstValue-1+inital // second as last first (first -1) + operation value
        }
        this.setState({rows: tempRows});
    }

    append =()=> {
        if (this.state.startCalcOnClick){
            this.startCalculation()
        }
        let startTime = performance.now()
        this.setState({startTime: startTime})

        var operations = parseInt(this.state.operations)+1
        var inital = operations-1
        var rowsLength = this.state.rows.length
        var tempRows = this.state.rows
        tempRows[1] = tempRows[1] + ",00"

        while (operations < rowsLength) {
            //console.log("operations: "+operations + "rows Lenght: " +rowsLength)
            tempRows[operations] = tempRows[operations] + ",00";
            operations = operations + inital
        }
        this.setState({rows: tempRows});
    }

    delete =()=> {
        if (this.state.startCalcOnClick){
            this.startCalculation()
        }
        let startTime = performance.now()
        this.setState({startTime: startTime})

        var operations = parseInt(this.state.operations)
        var initalOperator = operations
        var tempOps = operations
        var tempRows = this.state.rows
        // always delete first row and reduce index by 1 (lenght -1)
        tempRows.splice(1, 1);

        while (tempOps <= this.state.rows.length) {
            // console.log("operations: " +tempOps + "value: " +tempRows[tempOps])
            tempRows.splice(tempOps--, 1);
            tempOps = tempOps + initalOperator
        }
        this.setState({rows: tempRows});
    }

    startCalculation =  () => {
        console.log("Start Background calculations")
        var tempCals = setInterval(function(){
            let num = 50
            var a = 1, b = 0, temp;
            while (num >= 0){
              temp = a;
              a = a + b;
              b = temp;
              //console.log(b)
              num--;
            }
        },1000)
        this.setState({startCalc: tempCals})
    }

   stopCalculation = ()=> {
        console.log("Stop Background calculations")
        clearInterval(this.state.startCalc);
   }

   startCalcOnClick = (event) => {
    this.setState({startCalcOnClick: event.target.checked});
   }

    render() {
        const canvasElements = [];

            for (var i = 0; i < this.state.canvas; i += 1) {
                canvasElements.push(<Canvas key={i} number={i} height="80px" width="80px"/>);
            };

          

        return (
            <div id="container">
                <h3>Welcome Performancetest</h3>
        
                <button type="button" onClick = {this.clear}>Clear</button> 
                <button type="button" onClick={this.insertNumbers}>Insert</button> 
                <button type="button" onClick={this.swap}>Swap</button> 
                <button type="button" onClick={this.append}>Append</button> 
                <button type="button" onClick={this.delete}>Delete</button> 
                <button type="button" onClick={this.insertCanvas}>Insert Canvas</button> 
                <button type="button" onClick={this.startCalculation}>Starte Berechnung</button> 
                <button type="button" onClick={this.stopCalculation}>Stoppe Berechnung</button> <br/> <br/>
                <input type="checkbox" checked={this.state.startCalcOnClick} onChange={this.startCalcOnClick} /> Starte Kalkulation mit Button Click 
                <br/> <br/>

                <input type="text" name="operations"  onChange={this.setOperations}/>

                <p id="ops">Current Operations: {this.state.operations}</p>
                <br/> <br/>

                <table>
                 <tbody>
                     <tr>
                        <th>Values</th>
                     </tr>
                    {this.state.rows.map((r, i) => (
                      <tr key={i}>
                          <td key={i}>{r}</td>
                      </tr>
                    ))}
                      
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <th>Canvas</th>
                        </tr>

                        {canvasElements.map((r, i) => (
                      <tr id= "canvasId" key={i}>
                          <th>{r}</th> 
                      </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Performancetest;

