import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-return-modal',
  templateUrl: './return-modal.component.html',
  providers: [DataService]
})
export class ReturnModalComponent implements OnInit {

  @Input() tape: Tape;
  basePayment: number = 3;
  delay: number = 0;
  unrewindedPenalty: number = 5;
  brokenPenalty: number = 30;

  constructor(private dataService: DataService) { }

  returnTape(tape: Tape, delay){
    if(delay != undefined) {
      tape.status = "free";
      this.dataService.fbSetTape(tape);
    }
  }

  calculatePayment(delay, unrewinded, broken){
    var payment = this.basePayment;
    payment += delay;
    if(unrewinded){
      payment += this.unrewindedPenalty;
    }
    if(broken){
      payment += this.brokenPenalty;
    }
    return payment;
  }

  ngOnInit() {
  }

}
