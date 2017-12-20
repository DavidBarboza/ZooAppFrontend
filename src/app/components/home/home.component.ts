import { fadeIn } from './../animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [fadeIn]
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido a Zoo Perrón de la Pirshi';

  ngOnInit(){
      console.log("home.component cargado");
  }
}
