import React from 'react'
import axios from 'axios'
import './Multiplechoice.css';

class Multiplechoice extends React.Component {
  
    state = {
        frage : '',
        antworten : [],
        korrekt : '',
      }
    
      componentDidMount() {
        axios.get('http://localhost:3000/data.json')
        .then (res =>{
                const quest = res.data
                const frage = quest.frage1.frage
                const antworten = quest.frage1.antworten
                const korrekt = quest.frage1.korrekt
                this.setState({ frage, antworten, korrekt}); 
      })
    }

    evaluateAnswer(event){
        debugger
        if (typeof event.target.value === 'undefined' || event.target.value == null || event.target.value === ""){
            return;
        }
        console.log("eventtargetvalue: " + event.target.value)
        if(event.target.value.startsWith(this.state.korrekt)){
            console.log("Answer is korrect!!")
            window.document.getElementById(event.target.value).innerText="      ->YES"
            
        } else {
            console.log("Answer is false!!")
            window.document.getElementById(event.target.value).innerText="      ->NO"
        }
    }

    render() {
        const question = this.state.frage
        const antworten = this.state.antworten
 
        return (
            <div id="container">

                <p>In dieser Anforderung wird das Laden einer JSON Datei via des HTTP Clients axios umgesetzt. Außerdem wird die Validierung der Antworten je nach selection vorgenommen.</p>
                <h3>{question}</h3>
                <ul className="questions" onChange={this.evaluateAnswer.bind(this)}>
                     { antworten.map((antwort, i) =>  
                     <li key={i}><input type="radio" name="antwort" value={antwort} /> {antwort} <span id={antwort}/></li>  )}     
                 </ul>  
               <br/>                
            </div>
        );
    }
}

export default Multiplechoice;

