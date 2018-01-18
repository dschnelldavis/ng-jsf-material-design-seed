import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule } from '@angular/material';

import { JsonSchemaFormModule, MaterialDesignFrameworkModule } from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatCardModule, MatToolbarModule,
    MaterialDesignFrameworkModule, JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
