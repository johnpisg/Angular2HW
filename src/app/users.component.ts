import { Component, OnInit } from '@angular/core';
import { UserService } from './services/userService'
import { Usuario } from './dtos/usuario'

@Component({
  selector: 'users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Listado de usuarios';
  usuarios: Usuario[] = [];
  errorMsg: string;
  constructor(private userService: UserService){

  }

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe(
         /* happy path */ p => this.usuarios = p,
         /* error path */ e => this.errorMsg = e);
  }

}
