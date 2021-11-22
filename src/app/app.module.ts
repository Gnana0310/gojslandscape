import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackedLayoutDiagramComponent } from './packed-layout-diagram/packed-layout-diagram.component';
import { GojsAngularModule } from 'gojs-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PackedLayoutDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GojsAngularModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
