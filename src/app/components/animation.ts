import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn', [
        /* no se necesita
        state('*', style({
            opacity: 1
        })),*/
        transition(':enter',[
            style({
                opacity: 0
                //transform: 'translateY(-15%)'
            }),
            animate('300ms linear', style({
                opacity: 1
                //transform: 'translateY(0%)'
            }))
        ])
        /* no se necesita
        transition(':leave', [
            animate('500ms linear', style({
                opacity: 0
            }))
        ])*/
    ]);