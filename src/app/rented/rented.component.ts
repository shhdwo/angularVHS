import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css'],
  providers: [DataService]
})
export class RentedComponent implements OnInit {

  tapes = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.tapes = data
    );
  }

}
