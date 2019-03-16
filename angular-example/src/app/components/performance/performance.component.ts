import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  template: `
        <div id="performanceTest" >
        <p>In Performance</p>
        <div id="ops">

            <button type="button" (click)="insertNumbers()">Insert</button>
            <button type="button" (click)="clear()">Clear</button>
            <button type="button" (click)="swap()">Swap</button>
            <button type="button" (click)="append()">Append</button>
            <button type="button" (click)="remove()">Delete</button>
            <button type="button" (click)="insertCanvas()">Insert Canvas</button>
            <button type="button" (click)="startCalculation()">Starte Berechnung</button>
            <button type="button" (click)="stopCalculation()">Stoppe Berechnung</button>
            <input type="checkbox" [(ngModel)]="startCalcOnClick" /> Starte Kalkulation mit Button Click
            <br><br>

            <input (change)="setOperations($event)" type="Number" value="ops" />
            {{ operations }}
            <br><br>
            <div id="tables">
                <table>
                    <tbody>
                        <tr>
                            <th>Values</th>
                        </tr>
                        <tr *ngFor="let row of rows" >
                            <td>{{row}}</td>
                        </tr>
                    </tbody>
                </table>
                <table id="canvasTable">
                    <tbody>
                        <tr>
                            <th>Canvas</th>
                          </tr>
                              <tr *ngFor="let can of cans(amountOfCanvas).fill(1)">
                              <td> <app-performance_canvas> </app-performance_canvas> </td>
                          </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
  `,
  styles: [`
      table, th, td {
        border: 1px solid black;
        float: left;
        margin: 0 auto;
        width: 100px;
      }
      #canvasTable {
        margin-left: 10px;
      }
      #tables {
          margin-left: 40%;
      }
      #performanceTest {
        text-align:center;
      }
  `]
})
export class PerformanceComponent implements OnInit {

      operations: number = 0
      amountOfCanvas: number = 0
      rows = []
      cans = Array;
      startCalc = null;
      startTime:number = 0
      startCalcOnClick: boolean = false

      constructor() { }

      ngOnInit() {
      }

      ngAfterViewChecked() {
        let endTime = performance.now()
          let executionTime = endTime - this.startTime

          if(this.startTime !== 0) {
              console.log(executionTime)
          }
          console.log("Update finished!")
      }
      setOperations(event){
        this.startTime = 0
        this.operations = parseInt(event.target.value)
      }
      insertNumbers () {
        if (this.startCalcOnClick){
          this.startCalculation()
        }
        this.startTime = performance.now()
        // var temp = 0 //-> for debugging only
        for (let i=0;i < this.operations;i++){
            this.rows.push(Math.floor(1000 + Math.random() * 9000));
            //this.rows.push(temp++) //-> for debugging only
        }
    }

    clear () {
        this.rows = []
        this.amountOfCanvas = 0
        this.startTime = 0
    }

    swap () {
        if (this.startCalcOnClick){
          this.startCalculation()
        }
        this.startTime = performance.now()
        var operations = this.operations+1
        var firstValue = 1
        var rowsLength = this.rows.length
        var inital = operations

        while (operations < rowsLength) {
            let  tempFirst = this.rows[firstValue];  // save fist entry to swap
            this.rows.splice(firstValue, 1, this.rows[operations]);
            this.rows.splice(operations, 1, tempFirst);
              // console.log("swap index: "+firstValue +"<- " + operations)
              // console.log("swap index: "+operations +"<- " + firstValue)
            firstValue=operations+1 // first as next entry
            operations=firstValue-1+inital // second as last first (first -1) + operation value
        }
    }

    append () {
        if (this.startCalcOnClick){
          this.startCalculation()
        }
        this.startTime = performance.now()

        var operations = this.operations+1
        var inital = operations-1
        var rowsLength = this.rows.length
        this.rows[1] = this.rows[operations] + ",00"
            while (operations < rowsLength) {
              this.rows[operations] = this.rows[operations] + ",00"
                operations = operations + inital
            }
    }

    remove () {
        if (this.startCalcOnClick){
          this.startCalculation()
        }
        this.startTime = performance.now()

        var operations = this.operations
        var initalOperator = operations
        var tempOps = operations
        // always delete first row and reduce index by 1 (lenght -1)
        this.rows.splice(1, 1);

            while (tempOps <= this.rows.length) {
                // console.log("operations: " +tempOps + "value: " +tempRows[tempOps])
                this.rows.splice(tempOps--, 1);
                tempOps = tempOps + initalOperator
            }
    }

    insertCanvas () {
      if (this.startCalcOnClick){
        this.startCalculation()
      }
      this.startTime = performance.now()

      this.amountOfCanvas = this.operations
    }

    startCalculation () {
      this.startCalc = setInterval(function(){
          let num = 30
          var a = 1, b = 0, temp;
          while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            //console.log(b)
            num--;
          }
      },10)
    }

    stopCalculation () {
      clearInterval(this.startCalc);
    }

}
