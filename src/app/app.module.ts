import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';

import { JsonSchemaFormModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatToolbarModule,
    JsonSchemaFormModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
