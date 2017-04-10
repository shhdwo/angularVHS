import { Component, OnInit, Input } from '@angular/core';
import { Tape } from '../app.tape';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  @Input() tape: Tape;

  constructor() { }

  ngOnInit() {
  }

}
