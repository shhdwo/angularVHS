import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  tapes = []
  selectedTape: Tape;

  constructor(private dataService: DataService) { }

  selectTape(tape: Tape){
    this.selectedTape = tape;
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.tapes = data
    );
  }

}
