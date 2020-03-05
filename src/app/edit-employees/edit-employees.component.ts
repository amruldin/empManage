import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  angForm : FormGroup;
  employee: any = {};

  constructor(private route:ActivatedRoute,private router:Router,private ps:EmployeesService) { }

  updateEmployee(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus)
  {
    this.route.params.subscribe(params=>{
      this.ps.updateEmployee(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus,params.id);
      this.router.navigate(['employees']);
    })
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.ps.editEmployee(params['id']).subscribe(res=>{
        this.employee = res;
        console.log(this.employee);
      })
    })
  }

}
