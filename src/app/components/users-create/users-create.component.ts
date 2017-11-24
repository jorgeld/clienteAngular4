import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css'],
  providers: [ UsersService]
})
export class UsersCreateComponent implements OnInit {

  private nombre;
  private nombreUsuario;
  private email;
  private pass;

  constructor( private _usersService: UsersService) {

  }

  getUsers = function(){
    this._usersService.getUsers()
      .subscribe(
        result => {
          this.usersList = result.users;
          console.log(this.usersList)
        },
        error => {
          console.log("Error al llamar servicio getUsers()");
          alert(error);
        }
      )
  };

  newUser = function(){

  let bodyParse = {
      'userName' : this.nombreUsuario,
      'name' : this.nombre,
      'email' : this.email,
      'pass' : this.pass,
    };

    this._usersService.newUser(bodyParse)
      .subscribe(
        result => {
          console.log('Usuario creado correctamente --> ' , result)
          this.getUsers();
        },
        error => {
          console.log("Error al llamar servicio getUsers()");
          alert(error);
        })
  }

  ngOnInit() {
  }

}
