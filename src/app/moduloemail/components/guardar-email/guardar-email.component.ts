import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'guardar-email',
  template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="emailContacto"/>
    <button (click)="saveEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent{
  title = 'Guardar Email';
  emailContacto : string;

  saveEmail(){
    localStorage.setItem('emailContacto', this.emailContacto);
  }
}