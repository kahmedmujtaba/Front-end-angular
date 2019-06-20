import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //angular forms
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //bootstrap
import { AngularFontAwesomeModule } from 'angular-font-awesome'; //fontawesome
import { AppComponent } from './app.component';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'editable-table', component: EditableTableComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EditableTableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, //bootstrap after here, it was @imported to style.css
    AngularFontAwesomeModule, //fontawesome
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
