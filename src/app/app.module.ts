import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MakingTableWithEditableDeleteableRowsComponent } from './making-table-with-editable-deleteable-rows/making-table-with-editable-deleteable-rows.component';

@NgModule({
  declarations: [
    AppComponent,
    MakingTableWithEditableDeleteableRowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
