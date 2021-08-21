import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {authorname: 'Elon Musk', name:'John Kiarie'},
    {authorname: 'Enzo Ferrari', name: 'Peris Wanyama'},
    {authorname: 'Lewis Hamilton', name:'Joseph Wafula'}
    
  ];

 
}
