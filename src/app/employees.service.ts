import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class EmployeesService {

  uri = 'http://localhost:4000/employee';


  constructor(private http: HttpClient) { }

  addEmployee(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus){
    const obj = {
      EmployeeFirstName,
      EmployeeLastName,
      EmployeeAddress,
      EmployeeStatus
    };
    console.log(obj);

    this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('done'));


  }

  getEmployees(){
    return this.http.get(`${this.uri}`);
  }

  editEmployee(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateEmployee(EmployeeFirstName,EmployeeLastName,EmployeeAddress,EmployeeStatus,id){
    const obj={
      EmployeeFirstName,
      EmployeeLastName,
      EmployeeAddress,
      EmployeeStatus
    };
    this.http.post(`${this.uri}/update/${id}`,obj).subscribe(res=>console.log('done'));
  }


  deleteEmployee(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }

}
