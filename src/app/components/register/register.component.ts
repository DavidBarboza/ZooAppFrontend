import { UserService } from './../../services/user.service';
import { GLOBAL } from './../../services/global';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    //providers se pueden cargar globalmente en el app.module o en el componente que se utilizara
    providers: [UserService]
})

export class RegisterComponent implements OnInit{
    public title: String;
    public user: User;
    public status: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.title = 'Registro';
        this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit(){
        console.log('register.component cargado');
        //console.log(this._userService.register());
    }

    onSubmit(registerForm){
       this._userService.register(this.user).subscribe(
            response => {
                if(response.user && response.user._id){
                    //this.user = response.user;
                    this.status = 'success';
                    this.user = new User('','','','','','ROLE_USER','');
                    registerForm.reset();
                }else{
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
       );
    }
}
