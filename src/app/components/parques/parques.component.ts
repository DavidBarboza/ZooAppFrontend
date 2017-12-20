import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'parques',
    templateUrl: './parques.component.html'
})

export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() passDatos = new EventEmitter();

    constructor(){
        this.nombre = 'Parque perrón';
        this.metros = 450;
        this.vegetacion = 'Variada';
        this.abierto = false;
    }

    ngOnChanges(changes: SimpleChanges){
        //console.log(changes);
        console.log("Este se ejcuta cada vez que cambia algo en el componente ");
    }

    ngOnInit(){
        console.log("Method on init lanzado")
    }

    ngDoCheck(){
        console.log("Este se ejecuta cada vez que cambia algo en la aplicacion");
    }

    ngOnDestroy(){
        console.log("Este se ejecuta cuando se destruye el componente");
    }

    emitirEvento(){
        this.passDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto
        });
    }
}