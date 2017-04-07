import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tape } from '../app.tape';
declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  tapes = []
  selectedTape: Tape;
  actualId: number;
  activeUser = "Piotr Szydłowski";

  constructor(private dataService: DataService) { }

  selectTape(tape: Tape){
    this.selectedTape = tape;
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.tapes.push(snapshot.val())
    })
  }

  fbPostData(title: string, year: number, image: string, description: string){
    this.fbGetActualId();
    firebase.database().ref('/').child(this.actualId).set({
      id: this.actualId,
      title: title,
      year: year,
      rating: 0,
      status: "free",
      borrower: "",
      borrow_date: "",
      image: image,
      description: description});
  }

  fbGetActualId(){
    firebase.database().ref().on('value', (snapshot) => {
      this.actualId = snapshot.numChildren();
    })
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.tapes = data
    );

    //this.fbGetData();
  }

}
