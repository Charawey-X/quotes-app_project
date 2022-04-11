import { Component, OnInit, Input, Output } from '@angular/core';
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
    if (this.quoteForm.value.length!=0 && this.quoteForm.valid==true){
       this.quotes.unshift(this.quoteForm.value as Quote);
       this.adding = false;
       this.quoteForm.reset();

    }
    else {
      console.error();
    }
  }

  public quotes: Quote[] = [
    <Quote>{
      title: 'SKULDUGGERY PLEASANT: \nThe Dying Of The Light',
      description: 'There\'s no such thing as winning or losing. ' +
                    '\nThere is won and there is lost, there is victory and defeat. ' +
                    '\nThere are absolutes. Everything in between is still left to fight for.',
      author:
        'Derek Landy.',
      upvote:0,
      downvote:0,
    },
    <Quote>{
      title: 'Caraval: \nBook I',
      description: 'No one is truly honest. \nEven if we don\'t lie to others, we often lie to ourselves.',
      author:
        'Stephanie Garber.',
      upvote:0,
      downvote:0,
    },
    <Quote>{
      title: 'Dune: \nBook I',
      description: 'A process cannot be understood by stopping it. \nUnderstanding must move with the flow of the process, \nmust join it and flow with it.',
      author:
        'Frank Herbert.',
      upvote:0,
      downvote:0,
    },
    <Quote>{
      title: 'The Mountains Sing',
      description: 'If our stories survive, we will not die. \nEven when our bodies are no longer here on this Earth.',
      author:
        'Nguyễn Phan Quế Mai.',
      upvote:0,
      downvote:0,
    },
  ];

  newQuote =[
    <Quote>{
      upvote:0,
      downvote:0,
          }
  ];

  upVote(index:number){
    this.quotes[index].upvote+=1;
  }

  downVote(index:number){
    this.quotes[index].downvote+=1;
}

  public onDelete(index: number) {
    this.quotes.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.quoteForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
