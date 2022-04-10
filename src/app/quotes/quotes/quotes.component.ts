import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public adding = false;

  public quoteForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
  });

  public onSubmit() {
    this.quotes.unshift(this.quoteForm.value as Quote);
    this.adding = false;
  }

  public quotes: Quote[] = [
    <Quote>{
      title: 'SKULDUGGERY PLEASANT: \nThe Dying Of The Light',
      description: 'There\'s no such thing as winning or losing. ' +
                    '\nThere is won and there is lost, there is victory and defeat. ' +
                    '\nThere are absolutes. Everything in between is still left to fight for.',
      author:
        'Derek Landy.',
    },
    <Quote>{
      title: 'Caraval: \nBook I',
      description: 'No one is truly honest. \nEven if we don\'t lie to others, we often lie to ourselves.',
      author:
        'Stephanie Garber.',
    },
    <Quote>{
      title: 'Dune: \nBook I',
      description: 'A process cannot be understood by stopping it. \nUnderstanding must move with the flow of the process, \nmust join it and flow with it.',
      author:
        'Frank Herbert.',
    },
    <Quote>{
      title: 'The Mountains Sing',
      description: 'If our stories survive, we will not die. \nEven when our bodies are no longer here on this Earth.',
      author:
        'Nguyễn Phan Quế Mai.',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
