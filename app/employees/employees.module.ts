
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";
import { employeesRoutes} from "./employees.routing"
import { EmployeeService } from "./services/employee.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { FilterEmpByPipe } from "./pipes/filterEmp-by.pipe";
 


@NgModule({
    imports:[CommonModule,employeesRoutes,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule],
    exports:[EmployeesListComponent],
    declarations:[ EmployeesListComponent, 
                   EmployeeDetailsComponent,
                   FilterEmpByPipe],
    providers:[EmployeeService]
 
})

export class EmployeesModule{

}