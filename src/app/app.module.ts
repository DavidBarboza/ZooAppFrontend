import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing, appRoutingProviders } from './app.routing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';

//my components
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { FormsModule } from '@angular/forms'; //para que funcione la directiva ngModel en el component.html
import { NotfoundComponent } from './components/notfound/notfound.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimalsComponent } from './components/animals/animals.component';

///importar nuevo modul email
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    NotfoundComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    SimpleTinyComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, //para que funcione la directiva ngModel en el component.html
    routing,
    ModuloEmailModule,
    AdminModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
