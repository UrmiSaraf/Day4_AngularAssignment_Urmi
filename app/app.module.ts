import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//import { EmployeesModule } from "./employees/employees.module";
//import { EventsModule } from "./events/events.module";
//import { JphModule } from "./jph/jph.module";
import { SepNavbarModule} from "./navigation/navigation.module";

//Components
import { AppComponent } from "./app.component";
import { appRouting } from "./app.routing";
//import { HomeModule } from "./home/home.module";

//Pipes

//Services

@NgModule({
    imports: [BrowserModule,SepNavbarModule,appRouting],
    exports: [],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule {

}