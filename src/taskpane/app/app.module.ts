import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import { ProjectAssignmentComponent } from "./project-assignment/project-assignment.component";
import { FunctionTestComponent } from "./function-test/function-test.component";
import { AppRoutingModule } from "./app-routing.module";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  declarations: [AppComponent,ProjectAssignmentComponent,FunctionTestComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export default class AppModule {}
