import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../animation';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit{
  title = 'Animals';

  ngOnInit(){
      console.log("animals.component cargado");
  }
}
