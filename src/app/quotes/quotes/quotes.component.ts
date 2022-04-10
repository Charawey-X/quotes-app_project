import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quotes: Quote[] = [
    <Quote>{
      title: '15 Minute Walk',
      description: 'Daily',
      author:
        'This habit makes my kitchen look nice and makes my day better the next morning.',
    },
    <Quote>{
      title: 'Weed the Garden',
      description: 'Weekly',
      author:
        'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
