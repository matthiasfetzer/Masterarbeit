import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-multiplechoice',
  template: `
    <div id="frage">
      <h2> {{ multiplechoice?.frage }} </h2>
    </div>
    <div id="antworten">
      <li *ngFor="let antwort of multiplechoice?.antworten">
           <input type="radio" [value]="antwort" (change)="evaluate(antwort)" name="antworten"/> {{ antwort }}
      </li>
      <br>
      {{ answerEvaluation }}
    </div>
   
   
  `,
  styles: [`
    #frage {
      text-align: center;
    } 
    #antworten {
      float: left;
      margin-left: 45%;
    }
    li {
      list-style-type: none;
    }

  `]
})
export class MultiplechoiceComponent implements OnInit {

   multiplechoice : Multiplechoice = null;
   answerEvaluation : string = ''

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Multiplechoice>('http://localhost:4200/assets/data.json').subscribe(data => {
      this.multiplechoice = data['frage1']
    });

  }

  evaluate(value){
    if(value.startsWith(this.multiplechoice.korrekt)){
      this.answerEvaluation = "Anwort ist korrekt"
    } else {
      this.answerEvaluation = "Anwort ist leider falsch"
    }
    
  }
  

}
