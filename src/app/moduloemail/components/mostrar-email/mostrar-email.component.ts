import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
    <div *ngIf="emailContacto">
        <h4>{{title}}</h4>
        <strong>Email: {{emailContacto}} </strong>
        <button (click)="borrarEmail()">Eliminar email del local storage</button>
    </div>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck{
  title = 'Mostrar email';
  emailContacto : string;

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    this.emailContacto = null;
  }
}