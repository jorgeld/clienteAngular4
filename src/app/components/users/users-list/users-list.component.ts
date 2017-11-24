import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';
import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [ UsersService , AppComponent]
})

export class UsersListComponent implements OnInit {

  @Input('listadousuarios') listadousuarios;

  constructor(private _usersService: UsersService, private _appComponent: AppComponent, private _NgbModal: NgbModal) {}


  deleteUser = function(idUser,index){
    this._usersService.deleteUser(idUser)
      .subscribe(
        result =>{
          this.listadousuarios.splice(index,1);
          console.log(`Borrado correctamente : ${result}`)
        },
        error => {
          console.log(`Error al eliminar Usuario ----> ${error}`);
          alert(error);
        }
      )
  };

  confirmarborrado = function(content){
    this._NgbModal.open(content);
  };

  ngOnInit() {
  }


}
