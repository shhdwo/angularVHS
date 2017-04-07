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

  tapes = [];

  constructor(private dataService: DataService) { }

  returnTape(tape: Tape){
    tape.status = "free";
    firebase.database().ref('/' + tape.id).set({
      id: tape.id,
      title: tape.title,
      year: tape.year,
      rating: tape.rating,
      status: tape.status,
      borrower: tape.borrower,
      borrow_date: tape.borrow_date,
      image: tape.image,
      description: tape.description
    })
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.tapes.push(snapshot.val())
    })
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.tapes = data
    );

    //this.fbGetData();
  }

}
