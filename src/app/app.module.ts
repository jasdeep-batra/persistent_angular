import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PlotComponent } from './plot/plot.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
