import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Employee } from '../Employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees:Employee[];
  
  constructor(private ps: EmployeesService ,private router:Router) { }

  ngOnInit(){
    this.ps.getEmployees().subscribe((data:Employee[])=>{
      this.employees = data
    })
  }

  deleteEmployee(id){
    this.ps.deleteEmployee(id).subscribe(res=>{
        this.employees.splice(id,1);
        this.router.navigate(['employees']);

    })
  }

}
