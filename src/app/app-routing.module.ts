import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';




const routes: Routes = [
  {path:'employees',component:ViewEmployeesComponent},
  {path:'edit/:id',component:AddEmployeesComponent},
  {path:'employee/add',component:AddEmployeesComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
