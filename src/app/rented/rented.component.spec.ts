/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RentedComponent } from './rented.component';
import { FilterPipe } from '../filter.pipe';
import { RentedPipe } from '../rented.pipe';
import { FilterBorrowerPipe } from '../filter-borrower.pipe';
import { SortByPipe } from '../sort-by.pipe';
import { ReturnModalComponent } from '../return-modal/return-modal.component';
import { DataService } from '../data.service';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let tapes;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedComponent, FilterPipe, RentedPipe, FilterBorrowerPipe, SortByPipe, ReturnModalComponent ],
      imports: [ FormsModule, HttpModule ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedComponent);
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
      expect(el.querySelector('h4').textContent).toContain('rented tapes');
  })

  it('should give tapes list to view', () => {
      let listing = el.querySelectorAll('.tapeId');
      expect(listing[0].textContent).toContain('1');
  })

  it('should NOT give status free tapes to view', () => {
      let listing = el.querySelectorAll('.tapeId');
      expect(listing[1]).not.toBeDefined();
  })

  it('should set selectedTape', () => {
      component.selectTape(tapes[0]);
      fixture.detectChanges();
      expect(component.selectedTape.title).toContain('Truman Show');
      expect(component.selectedTape).toEqual(tapes[0]);
  })

});
