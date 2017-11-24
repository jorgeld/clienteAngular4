import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UsersService ]
})
export class LoginComponent implements OnInit {

  // constructor( _usersService : UsersService) {}
  constructor( private _usersService : UsersService ) {}

  public userid;
  public password;

  setAutentificar = function(){

    let body = {
      userName : this.userid,
      pass : this.password
    };

    this._usersService.authUser(body)
      .subscribe(
        result => {
          console.log('Usuario creado correctamente --> ' , result);
        },
        error => {
          console.log("Error al llamar servicio getUsers()");
          alert(error);
        })
  };


  ngOnInit() {

  }

}
