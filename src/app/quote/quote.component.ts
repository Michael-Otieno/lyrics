import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {authorname: 'Elon Musk', name:'John Kiarie',description:'Sel-driving cars are the natural extension of active safety and obviously something we should do.'},
    {authorname: 'Enzo Ferrari', name: 'Peris Wanyama',description: "The fact is I don't just drive to get from A to B. I enjoy feeling the cars reactions, becoming part of it."},
    {authorname: 'Lewis Hamilton', name:'Joseph Wafula',description:"The way I drive, the way I handle a car, is an expression of my inner feelings."}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
