import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UploadService } from './../../../services/upload.service';
import { UserService } from './../../../services/user.service';
import { AnimalService } from './../../../services/animal.service';
import { Animal } from './../../../models/animal';
import { GLOBAL } from './../../../services/global';


@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class EditComponent implements OnInit {
    public title: string;
    public animal: Animal;
    public identity;
    public token;
    public url: string;
    public status: string;
    public filesToUpload: Array<File>;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _animalService: AnimalService,
        private _uploadService: UploadService
    ){
        this.title = 'Editar';
        this.animal = new Animal('','','',0,'','');
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        
        this.getAnimal();
        
    }

    onSubmit(){
        let id = this.animal._id;
        this._animalService.editAnimal(this.token, id, this.animal).subscribe(
            response =>{
                if(!response.animal){
                    this.status = 'error';
                }else{
                    this.status = 'succes';
                    this.animal = response.animal;

                    //subir imagen
                    if (!this.filesToUpload) {
                        this._router.navigate(['/animals', this.animal._id]);    
                    } else {
                        this._uploadService.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
                        .then((result:any)=>{
                             this.animal.image = result.image;
                             this._router.navigate(['/animals', this.animal._id]);    
                        });                           
                    }
                }
            },  
            error => {
                let errorMessage = <any>error;
                if(errorMessage !=null){
                    this.status = 'error';
                }
            }
        );
    }

    getAnimal(){
      this._route.params.forEach((params: Params) => {
          let id = params['id'];

          this._animalService.getAnimal(id).subscribe(
              response => {
                  if(!response.animal){
                      this._router.navigate(['/home'])
                  }else{
                      this.animal = response.animal;
                  }
              },
              error => {
                  console.log(<any>error);
                  this._router.navigate(['/home'])
              }
          );
      });
  }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
