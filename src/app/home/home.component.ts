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

  selectedTape: Tape;

  constructor(private dataService: DataService) { }

  selectTape(tape: Tape){
    this.selectedTape = tape;
  }

  addTape(title: string, year: number, image: string, description: string){
    this.dataService.fbPostData(title, year, image, description);
  }

  ngOnInit() {
    this.dataService.fbGetData();
  }
}
