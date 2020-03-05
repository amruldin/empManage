import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  angForm: FormGroup;

  constructor(private ps:EmployeesService) { }

  addEmp(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus){
    this.ps.addEmployee(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus);
  }
  ngOnInit(): void {
  }

}
