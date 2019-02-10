import React from 'react'
import './Performancetest.css';

class Performancetest extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {operations: '', rows: ['Values'] };
      }

    setOperations(event) {
        console.log(event.target.value)
        const ops = event.target.value
        this.setState({operations : ops})
    }

    insert() {
        var rows = this.state.rows
        var operations = this.state.operations
        
        var temp = 0
        for (let i=0;i < parseInt(operations, 10);i++){
            // TODO change back
            //rows.push(Math.floor(1000 + Math.random() * 9000))
            rows.push(temp++)
            this.setState({rows: rows})
        }
    }

    clear() {
        var rows = ['Values']
        this.setState({rows: rows})
    }

    swap () {
        // first row is header
        var rows = this.state.rows.length-1
        var operations = parseInt(this.state.operations)+1
        var inital = operations
        var first = 1
 
        while (operations <= rows) {
            console.log("first:" + first)
            console.log("second:" + operations)
            if(operations >= rows){
                return;
            }
            // Todo
            rows[first] = rows[operations]
            first=operations+inital
            operations=first+inital
        }
    }



    render() {

        return (
            <div id="container">

                <h3>Welcome Performancetest</h3>
        
                <button type="button" onClick={this.clear.bind(this)}>Clear</button> 
                <button type="button" onClick={this.insert.bind(this)}>Insert</button> 
                <button type="button" onClick={this.swap.bind(this)}>Swap</button> 
                <button type="button">Append</button> 
                <button type="button">Delete</button> 
                <button type="button">Insert Canvas</button> 
                <button type="button">Starte Berechnung</button> 
                <button type="button">Stoppe Berechnung</button> 
                <br/> <br/>

                

                <input type="text" name="operations"  onChange={this.setOperations.bind(this)}/>

                <p id="ops">Current Operations: {this.state.operations}</p>
                <br/> <br/>
                
                <table>
                 <tbody>
                    {this.state.rows.map((r, i) => (
                      <tr key={i}>
                          <td key={i}>{r}</td>
                      </tr>
                    ))}
                   </tbody>
                </table>

            </div>
        );
    }
}

export default Performancetest;

