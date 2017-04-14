/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tape } from '../app.tape';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { FilterPipe } from '../filter.pipe';
import { DetailsComponent } from '../details/details.component';
import { BorrowModalComponent } from '../borrow-modal/borrow-modal.component';
import { DataService } from '../data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let tapes;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FilterPipe, DetailsComponent, BorrowModalComponent ],
      imports: [ FormsModule, HttpModule ],
      providers: [ DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = fixture.nativeElement;
    tapes = [
       {
         "id": 1,
         "title": "Truman Show",
         "year": 1998,
         "rating": 5.0,
         "status": "rented",
         "borrower": "Piotr Szydłowski",
         "borrow_date": "2017/04/01",
         "image": "../assets/truman_show.png",
         "description": "Truman Burbank odkrywa, że jest głównym bohaterem reality show nadawanego 24 godziny na dobę."
       },
       {
         "id": 2,
         "title": "Terminator",
         "year": 1984,
         "rating": 5.0,
         "status": "free",
         "borrower": "",
         "borrow_date": "",
         "image": "../assets/terminator.png",
         "description": "Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę."
       }
    ];
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'fbGetData')
          .and.returnValue(true);
    let spy = spyOn(dataService, 'getTapes')
          .and.returnValue(tapes);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct title', () => {
      expect(el.querySelector('h4').textContent).toContain('tapes listing  add new tape');
  })

  it('should give tapes list to view', () => {
      let listing = el.querySelectorAll('.tapeId');
      expect(listing[0].textContent).toContain('1');
      expect(listing[1].textContent).toContain('2');
  })

});
