import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UploadService } from './../../../services/upload.service';
import { UserService } from './../../../services/user.service';
import { AnimalService } from './../../../services/animal.service';
import { Animal } from './../../../models/animal';
import { GLOBAL } from './../../../services/global';

import { fadeLateral } from './../../animation';


@Component({
    selector: 'admin-list',
    templateUrl: './list.component.html',
    providers: [AnimalService, UserService],
    animations: [fadeLateral]
})
export class ListComponent implements OnInit{
    public title: string;
    //numbers = new Array(10);
    public animals: Animal[];
    public token;
    public busqueda: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _animalService: AnimalService,
        private _userService: UserService
    ){
        this.title = 'Listado de animales';
        this.token = this._userService.getToken();
    }

    ngOnInit(){
        this.getAnimals();
    }

    getAnimals(){
        this._animalService.getAnimals().subscribe(
            response => {
                if (!response.animals) {

                } else {
                    this.animals = response.animals;
                }
            },
            error =>{
                console.log(<any>error);
            }
        );
    }

    deleteAnimal(id){
        this._animalService.deleteAnimal(this.token, id).subscribe(
            response => {
                if (!response.animal) {
                    alert('error en el servidor');
                } else {
                    this.getAnimals();
                }
            },
            error => {
                alert('error en el servidor');
            }
        );
    }
}
