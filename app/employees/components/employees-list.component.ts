import { Component, OnInit, Inject } from '@angular/core';

import { Employee } from "../models/employee";
import { ENGINE_METHOD_CIPHERS } from 'constants';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'employees-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent implements OnInit{
    constructor(@Inject(EmployeeService) private _employeeService:EmployeeService ) { }

    title: string = "Synechron Employees List!";
    subTitle: string = "Core Development Team!";
    selectedEmployee: Employee;
    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log(this.selectedEmployee);
    }

    ngOnInit(): void{
        // this.events=this._eventsService.getAllEvents();
        this._employeeService.getAllEmployees().subscribe(
        data=> this.employees=data,
        err => console.log(err),
        () =>console.log("Employee Service call finished"));    
     }
     
    
    employees: Employee[] = [] ;
}