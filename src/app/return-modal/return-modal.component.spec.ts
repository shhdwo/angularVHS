/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tape } from '../app.tape';
import { HttpModule } from '@angular/http';

import { ReturnModalComponent } from './return-modal.component';

describe('ReturnModalComponent', () => {
  let component: ReturnModalComponent;
  let fixture: ComponentFixture<ReturnModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnModalComponent ],
      imports: [ FormsModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
