import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeLateral = 
    trigger('fadeLateral', [
        /* no se necesita
        state('*', style({
            opacity: 1
        })),*/
        transition(':enter',[
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('300ms ease-in', style({
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ])
    ]);