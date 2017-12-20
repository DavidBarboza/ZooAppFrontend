import { Component } from '@angular/core';

@Component({
    selector: 'notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.css']
})

export class NotfoundComponent{
    public msg;

    constructor(){
        this.msg = 'Te has perdido chaval!';
    }
}