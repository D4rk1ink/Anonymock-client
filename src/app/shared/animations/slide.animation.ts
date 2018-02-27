import { trigger, animate, transition, style, query } from '@angular/animations'

export const slideAnimation = trigger('slideAnimation', [
    transition('* => *', [
        query(':enter', 
            [
                style({
                    transform: 'translateX(-10px)',
                    opacity: 0
                })
            ], 
            { optional: true }
        ),
        query(':leave', 
            [
                style({
                    transform: 'translateX(0px)',
                    opacity: 1
                }),
                animate('0.5s', style({
                    transform: 'translateX(10px)',
                    opacity: 0
                }))
            ], 
            { optional: true }
        ),
        query(':enter', 
            [
                style({
                    transform: 'translateX(-10px)',
                    opacity: 0
                }),
                animate('0.5s', style({
                    transform: 'translateX(0px)',
                    opacity: 1
                }))
            ], 
            { optional: true }
        )
    ])
])