import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RentedComponent } from './rented/rented.component';
import { DetailsComponent } from './details/details.component';
import { BorrowModalComponent } from './borrow-modal/borrow-modal.component';
import { ReturnModalComponent } from './return-modal/return-modal.component';
import { FilterPipe } from './filter.pipe';
import { RentedPipe } from './rented.pipe';
import { FilterBorrowerPipe } from './filter-borrower.pipe';
import { SortByPipe } from './sort-by.pipe';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rented', component: RentedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentedComponent,
    FilterPipe,
    RentedPipe,
    DetailsComponent,
    BorrowModalComponent,
    ReturnModalComponent,
    FilterBorrowerPipe,
    SortByPipe
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
