import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { FormComponent } from './shared/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './shared/components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NewformComponent } from './shared/components/newform/newform.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
