import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProjectAssignmentComponent} from './project-assignment/project-assignment.component';
import { FunctionTestComponent } from './function-test/function-test.component';
import AppComponent from './app.component';

const routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {path:'home',component: AppComponent},
  {path:'project-assignment',component: ProjectAssignmentComponent},
  {path:'function-test',component: FunctionTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }