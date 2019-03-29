<template>            
           <div id="performanceTest" >      
                <p>In Performance</p>
                <div id="ops">
                    
                    <button id="insertNumber" type="button" v-on:click="insertNumbers">Insert</button> 
                    <button id="clear" type="button" v-on:click="clear">Clear</button> 
                    <button id="swap" type="button" v-on:click="swap">Swap</button> 
                    <button id="append" type="button" v-on:click="append">Append</button> 
                    <button id="remove" type="button" v-on:click="remove">Delete</button> 
                    <button id="insertCanvas" type="button" v-on:click="insertCanvas">Insert Canvas</button> 
                    <button id="startCalc" type="button" v-on:click="startCalculation">Starte Berechnung</button> 
                    <button id="stopCalc" ype="button" v-on:click="stopCalculation">Stoppe Berechnung</button> 
                    <br><br>
                    <input id="checkCalc" type="checkbox" v-model="startCalcOnClick" /> Starte Kalkulation mit Button Click
                    <br><br>
                    <input id="operations" @change="setOperations($event)" type="Number" value="ops" />
                    {{ operations }}
                    <br><br>
                    <table>
                        <tbody>
                            <tr>
                                <th>Values</th>
                            </tr>
                            <tr v-for="(row, i) in rows" :key="i" v-bind:id="i">
                                <td key={i}>{{row}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                
                                <th>Canvas</th>
                            </tr>
                                <tr v-for="(can, i) in cans" :key="i" >
                                <td key={i}> <Canvas/> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
          </div>

</template>


<script>

import Canvas from './Canvas.vue'

export default {
    name : 'performanceTest',
     data () { 
        return { 
            operations : 0,
            rows : [],
            cans: 0,
            startCalcOnClick: false,
            startCalc: null,
            startTime : 0
        }
    },
    methods : {
       
        insertNumbers () {
            if (this.startCalcOnClick){
                this.startCalculation()
            }
            this.startTime = performance.now()
 
        // var temp = 0 //-> for debugging only
            for (let i=0;i < parseInt(this.operations, 10);i++){
                this.rows.push(Math.floor(1000 + Math.random() * 9000));
                //this.rows.push(temp++) //-> for debugging only
            }
        },
        
        setOperations (event){
            // don't show time on insert
            this.startTime = 0
            this.operations = event.target.value
        },
        clear () {
            this.rows = []
            this.cans = 0
            this.startTime = 0
        },

        swap () {
             if (this.startCalcOnClick){
                this.startCalculation()
            }
            this.startTime = performance.now()

            var operations = parseInt(this.operations)+1
            var firstValue = 1
            var rowsLength = this.rows.length
            var inital = operations

            while (operations < rowsLength) {
                let  tempFirst = this.rows[firstValue];  // save fist entry to swap
                this.rows.splice(firstValue, 1, this.rows[operations]);
                this.rows.splice(operations, 1, tempFirst);
                //  console.log("swap index: "+first +"<- " + operations)
                //  console.log("swap index: "+operations +"<- " + first)
                firstValue=operations+1 // first as next entry
                operations=firstValue-1+inital // second as last first (first -1) + operation value
            }
        },

        append () {
             if (this.startCalcOnClick){
                this.startCalculation()
            }
            this.startTime = performance.now()

            var operations = parseInt(this.operations)+1
            var inital = operations-1
            var rowsLength = this.rows.length
            this.$set(this.rows, 1, this.rows[operations] + ",00")
                while (operations < rowsLength) {
                    this.$set(this.rows, operations, this.rows[operations] + ",00")
                    operations = operations + inital
                }
            this.$set(this.rows)
        },

        remove () {
             if (this.startCalcOnClick){
                this.startCalculation()
            }
            this.startTime = performance.now()

            var operations = parseInt(this.operations)
            var initalOperator = operations
            var tempOps = operations
            // always delete first row and reduce index by 1 (lenght -1)
            this.rows.splice(1, 1);

                while (tempOps <= this.rows.length) {
                    // console.log("operations: " +tempOps + "value: " +tempRows[tempOps])
                    this.rows.splice(tempOps--, 1);
                    tempOps = tempOps + initalOperator
                }
            this.$set(this.rows)
        },

        insertCanvas () {
             if (this.startCalcOnClick){
                this.startCalculation()
            }
            this.startTime = performance.now()

            this.cans = parseInt(this.operations)
        },

        startCalculation () {
            console.log("Start Background calculations")
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
        },

        stopCalculation () {
            clearInterval(this.startCalc);
            console.log("Stop Background calculations")
        }

    }, updated : function(){
            let endTime = performance.now()
            let executionTime = endTime - this.startTime
    
            if(this.startTime !== 0) {
                console.log(executionTime)
            }
            console.log("Update finished!")
    },
    components : {
            Canvas
    }
}
</script>
<style scoped>
    table, th, td {
        border: 1px solid black;

        float: left;
        margin: 0 auto;
        width: 100px;
    }
    #ops {
        float: left;
        margin-left: 10%;
    }
    input {
        margin: 0
    }
</style>
