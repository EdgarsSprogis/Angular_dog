import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DognameComponent } from './dogname/dogname.component';
import { FormsModule } from '@angular/forms';
import { NewDogComponent } from './new-dog/new-dog.component';
import { DogImageComponent } from './dog-image/dog-image.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DognameComponent,
    NewDogComponent,
    DogImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
