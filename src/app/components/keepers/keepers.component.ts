import { GLOBAL } from './../../services/global';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';


@Component({
    selector: 'keepers',
    templateUrl: './keepers.component.html',
    providers: [UserService],
    animations: [fadeIn]
})
export class KeepersComponent implements OnInit{
  public title: string;
  public keepers: User[];
  public url: string;

    constructor(
        private _userService: UserService
    ){
        this.title = 'Cuidadores';
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log("keepers.component cargado");
        this.getKeepers();
    }

    getKeepers(){
        this._userService.getKeepers().subscribe(
            response => {
                if (!response.users) {

                } else {
                    this.keepers = response.users;
                }
            },
            error =>{
                console.log(<any>error);
            }
        );
    }
}
