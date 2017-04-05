import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  tapes = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.tapes = data
    );
  }

}
