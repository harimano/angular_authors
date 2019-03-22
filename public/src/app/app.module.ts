import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    LandingComponent,
    QuotesComponent,
    QuotesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
