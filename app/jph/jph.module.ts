import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { sepJphRoutes } from "./jph.routing";


import { JphService } from "./services/jph.service";
import { JphPostsListComponent } from './components/jph-posts-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule,sepJphRoutes],
    exports: [JphPostsListComponent],
    declarations: [JphPostsListComponent],
    providers: [JphService],
})
export class JphModule { }
     