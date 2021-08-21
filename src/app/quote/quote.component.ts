import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Elon Musk','John Kiarie','Sel-driving cars are the natural extension of active safety and obviously something we should do.'),
    new Quote('Enzo Ferrari', 'Peris Wanyama', "The fact is I don't just drive to get from A to B. I enjoy feeling the cars reactions, becoming part of it."),
    new Quote('Lewis Hamilton', 'Joseph Wafula', "The way I drive, the way I handle a car, is an expression of my inner feelings.")
    
  ];

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
