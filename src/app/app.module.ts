import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Importamos el módulo http del paquete http de Angular
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { Routes , RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'usuarios', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    UsersListComponent,
    UsersCreateComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
