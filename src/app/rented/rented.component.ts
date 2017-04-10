import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  providers: [DataService]
})
export class RentedComponent implements OnInit {

  selectedTape: Tape;

  constructor(private dataService: DataService) { }

  selectTape(tape: Tape){
    this.selectedTape = tape;
  }

  ngOnInit() {
    this.dataService.fbGetData();
  }

}
