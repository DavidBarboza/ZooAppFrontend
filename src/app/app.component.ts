import { UserService } from './services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title: string;
  public identity;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Aplicacion perrona de Angular';
  }

  ngOnInit(){
   this.identity = this._userService.getIdentity();
  }

  //para lograr obtener estos datos cuando haya algun cambio
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }    

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
