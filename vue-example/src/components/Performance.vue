<template>            
           <div id="performanceTest" >      
                <p>In Performance</p>
                <div id="ops">
                    
                    <button type="button" v-on:click="insertNumbers">Insert</button> 
                    <button type="button"  v-on:click="clear">Clear</button> 
                    <button type="button" v-on:click="swap">Swap</button> 
                    <button type="button" v-on:click="append">Append</button> 
                    <button type="button" v-on:click="remove">Delete</button> 
                    <button type="button" v-on:click="insertCanvas">Insert Canvas</button> 
                <!--
                    <button type="button" v-on:click="startCalculation">Starte Berechnung</button> 
                    <button type="button" v-on:click="parallel">Stoppe Berechnung</button> 
                -->
                    <br><br>
                    <input v-model="operations" type="Number" value="ops" />
                    {{ operations }}
                    <br><br>
                    <table>
                        <tbody>
                            <tr>
                                <th>Values</th>
                            </tr>
                            <tr v-for="(row, i) in rows" :key="i" >
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
            cans: 0
        }
    },
    methods : {
       
        insertNumbers () {

           // var temp = 0 //-> for debugging only
            for (let i=0;i < parseInt(this.operations, 10);i++){
                this.rows.push(Math.floor(1000 + Math.random() * 9000));
                //this.rows.push(temp++) //-> for debugging only
            }
        },

        clear () {
            this.rows = []
            this.cans = 0
        },

        swap () {
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
         this.cans = parseInt(this.operations)
        }   

    }, components : {
            Canvas
    }
}
</script>
<style scoped>
    table, th, td {
    border: 1px solid black;
    margin-left: 100px;
    float: left;
    margin: 0 auto;
    width: 100px;
}
    table {
        margin-left: 10%;
    }
</style>
