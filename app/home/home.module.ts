import { NgModule } from '@angular/core';

import { SepHomeComponent } from './components/sep-home.component';
import { sepHomeRoutes } from "./home.routes";

@NgModule({
    imports: [sepHomeRoutes],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
