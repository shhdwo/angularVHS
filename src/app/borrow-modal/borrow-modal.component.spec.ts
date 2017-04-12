/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tape } from '../app.tape';
import { HttpModule } from '@angular/http';

import { BorrowModalComponent } from './borrow-modal.component';
import { DataService } from '../data.service';

describe('BorrowModalComponent', () => {
  let component: BorrowModalComponent;
  let fixture: ComponentFixture<BorrowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowModalComponent ],
      imports: [ FormsModule, HttpModule ],
      providers: [ DataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
