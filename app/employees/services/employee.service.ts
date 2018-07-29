import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee";
import { Observable } from "rxjs";


@Injectable()
export class EmployeeService{
    constructor(@Inject(HttpClient) private _http:HttpClient){
}


getAllEmployees():Observable<Employee[]>{
    return this._http.get<Employee[]>("http://localhost:9090/api/employees");
 }

getSingleEmployee(id:number): Observable<Employee>{
    return this._http.get<Employee>("http://localhost:9090/api/employees/"+id);
 }
}