import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxModule } from '@nrwl/angular';
import { CoreDataModule } from '@second-pass/core-data';
import { CoreStateModule } from '@second-pass/core-state';
import { MaterialModule } from '@second-pass/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DrinksComponent, DrinksListComponent, DrinkDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
