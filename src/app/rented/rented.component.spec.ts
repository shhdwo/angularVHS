/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tape } from '../app.tape';
import { HttpModule } from '@angular/http';

import { RentedComponent } from './rented.component';
import { FilterPipe } from '../filter.pipe';
import { RentedPipe } from '../rented.pipe';
import { FilterBorrowerPipe } from '../filter-borrower.pipe';
import { SortByPipe } from '../sort-by.pipe';
import { ReturnModalComponent } from '../return-modal/return-modal.component';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedComponent, FilterPipe, RentedPipe, FilterBorrowerPipe, SortByPipe, ReturnModalComponent ],
      imports: [ FormsModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
