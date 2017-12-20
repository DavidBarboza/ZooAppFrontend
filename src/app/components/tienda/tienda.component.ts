import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core'
import { fadeIn } from './../animation';

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    animations: [
        fadeIn,
        trigger('marcar', [
            state('inactive', style({
                border: '5px solid #ccc'
            })),
            state('active', style({
               border: '5px solid yellow' ,
               background: 'red',
               borderRadius: '50px',
               transform: 'scale(1.2)'
            })),
            transition('inactive => active', animate('500ms linear')),
            transition('active => inactive', animate('500ms linear'))
        ])
    ]
})

export class TiendaComponent implements OnInit{
    public titulo;
    public nombreDelParque: string;
    public miParque;
    public status;

    constructor(){
        this.titulo = 'Esta es la tienda perros!';
        this.status = 'inactive';
    }

    cambiarEstado(status){
        if(status == 'inactive'){
            this.status = 'active';
        }else{
            this.status = 'inactive';
        }
    }

    //no recomendado usar jQuery dentro de angular
    ngOnInit(){
        $('#txtjq').hide();
        $('#btnjq').click(()=>{
            $('#txtjq').slideToggle();
        });
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event;
    }

    keyupHandlerFunction(content){
        console.log(content);
    }
}