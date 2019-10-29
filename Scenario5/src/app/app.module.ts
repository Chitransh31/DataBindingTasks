import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './grandparent/parent/parent.component';
import { ChildComponent } from './grandparent/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandparentComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
