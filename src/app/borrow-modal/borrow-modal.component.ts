import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-borrow-modal',
  templateUrl: './borrow-modal.component.html',
  styleUrls: ['./borrow-modal.component.css']
})
export class BorrowModalComponent implements OnInit {

  @Input() tape: Tape;

  constructor(private dataService: DataService) { }

  rentTape(tape: Tape, borrower: string, borrow_date: string){
    tape.status = "rented";
    tape.borrower = borrower;
    tape.borrow_date = borrow_date;
    this.dataService.fbSetTape(tape);
  }

  ngOnInit() {
  }

}
