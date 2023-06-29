import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FormComponent } from './components/form/form.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
