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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, FilterPipe, DetailsComponent, BorrowModalComponent ],
      imports: [ FormsModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
