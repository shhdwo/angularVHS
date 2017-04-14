import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase: any;

@Injectable()
export class DataService {

  actualId: number;
  tapes = [];

  constructor(private http: Http) {
  }

  fetchData() {
    return this.http.get('https://vhsrental-angular.firebaseio.com/.json').map(
      (res) => res.json()
    );
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.tapes.push(snapshot.val())
    });
  }

  fbSetTape(tape){
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

  fbGetActualId(){
    firebase.database().ref().on('value', (snapshot) => {
      this.actualId = snapshot.numChildren();
    })
  }

  fbPostData(title: string, year: number, image: string, description: string){
    this.fbGetActualId();
    firebase.database().ref('/' + this.actualId).set({
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

  getTapes() {
    return this.tapes;
  }

}
