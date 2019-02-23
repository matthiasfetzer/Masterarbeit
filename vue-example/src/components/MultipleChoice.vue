<template>
<div id="multiplechoice">
        <p id="Headline">In Multiple Choice</p>
        <div id="frage">
            <p>{{frage}}</p>
            <ul>
                <li v-for="(antwort) in antworten" :key="antwort" >
                    <input type="radio" name="antwort" :value="antwort" v-on:click="evaluate" /> {{ antwort }}
                </li>
            </ul>  
            {{showResult}}
        </div>
</div>
    
</template>

<script>
import Axios from 'axios';

export default {
    
    name: 'multiplechoice',
    data () { return { 
            frage : '',
            antworten : [],
            korrekt : '',
            showResult: ''
        }
    },
    methods : {
        evaluate : function (event) {
            let selectedValue = event.target.value
            if (selectedValue.startsWith(this.korrekt)){
                this.showResult = 'Antwort ist korrekt'
            } else {
                this.showResult = 'Antwort ist leider Falsch'
            }
        }
    },
    mounted () {
        Axios.get('http://localhost:8080/data.json')
            .then (res =>{
                    
                    const quest = res.data
                    this.frage = quest.frage1.frage
                    this.antworten = quest.frage1.antworten
                    this.korrekt = quest.frage1.korrekt
        })
    }
    }
</script>
<style scoped>
    #Headline{
        text-align: center;
    }
    #frage{
        text-align: left;
        padding-left: 40%;
    }
</style>
