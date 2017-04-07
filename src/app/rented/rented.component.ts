import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';
declare var firebase: any;

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css'],
  providers: [DataService]
})
export class RentedComponent implements OnInit {

  constructor(private dataService: DataService) { }

  returnTape(tape: Tape){
    tape.status = "free";
    this.dataService.fbSetTape(tape);
  }

  ngOnInit() {
    this.dataService.fbGetData();
  }

}
