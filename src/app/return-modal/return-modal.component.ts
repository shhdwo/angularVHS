import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-return-modal',
  templateUrl: './return-modal.component.html',
  styleUrls: ['./return-modal.component.css'],
  providers: [DataService]
})
export class ReturnModalComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
