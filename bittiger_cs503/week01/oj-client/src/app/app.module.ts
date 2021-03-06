import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

//to provide the dataservice application wide
import { DataService } from './services/data.service';

import { routing } from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
