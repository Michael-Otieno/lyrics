import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {authorname: 'Elon Musk', name:'John Kiarie'},
    {authorname: 'Enzo Ferrari', name: 'Peris Wanyama'},
    {authorname: 'Lewis Hamilton', name:'Joseph Wafula'}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
