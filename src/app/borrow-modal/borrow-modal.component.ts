import { Component, OnInit, Input } from '@angular/core';
import { Tape } from '../app.tape';
declare var firebase: any;

@Component({
  selector: 'app-borrow-modal',
  templateUrl: './borrow-modal.component.html',
  styleUrls: ['./borrow-modal.component.css']
})
export class BorrowModalComponent implements OnInit {

  @Input() tape: Tape;

  constructor() { }

  rentTape(tape: Tape, borrower: string, borrow_date: string){
    tape.status = "rented";
    tape.borrower = borrower;
    tape.borrow_date = borrow_date;
    firebase.database().ref('/' + tape.id).set({
      id: tape.id,
      title: tape.title,
      year: tape.year,
      rating: tape.rating,
      status: tape.status,
      borrower: tape.borrower,
      borrow_date: tape.borrow_date,
      image: tape.image,
      description: tape.description
    })
  }

  ngOnInit() {
  }

}
