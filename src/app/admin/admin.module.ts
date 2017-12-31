//Modulos
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AdminRoutingModule } from './admin-routing.module';

//Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

//Servicios
import { UserService } from './../services/user.service';
import { SearchPipe } from './pipes/search.pipe';

//Guards
import { AdminGuard } from './../services/admin.guard';

@NgModule({
    declarations: [
        MainComponent,
        ListComponent,
        EditComponent,
        AddComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    exports: [],
    providers: [
        AdminGuard,
        UserService
    ]
})
export class AdminModule { }

