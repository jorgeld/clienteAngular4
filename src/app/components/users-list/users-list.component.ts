import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [ UsersService ]
})
export class UsersListComponent implements OnInit {

  public usersList;

  constructor(private _usersService: UsersService) {}

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

  realizarPrueba = function(){
    this._usersService.prueba();
  };

  deleteUser = function(idUser,index){
    this._usersService.deleteUser(idUser)
      .subscribe(
        result =>{
          this.usersList.splice(index,1);
          console.log('Borrado correctamente ---> ' , result)
        },
        error => {
          console.log("Error al eliminar Usuario");
          alert(error);
        }
      )
  };

  ngOnInit() {
    this.getUsers();
  }


}
