import { trigger, animate, transition, style, query } from '@angular/animations'

export const slideAnimation = trigger('slideAnimation', [
    // Right to Left
    transition('4 => 41, 51 => 41, 411 => 412, 5 => 51', [
        query(':enter',
            [
                style({
                    transform: 'translateX(20px)',
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
                animate('.1s', style({
                    transform: 'translateX(-20px)',
                    opacity: 0
                }))
            ],
            { optional: true }
        ),
        query(':enter',
            [
                style({
                    transform: 'translateX(20px)',
                    opacity: 0
                }),
                animate('.1s', style({
                    transform: 'translateX(0px)',
                    opacity: 1
                }))
            ],
            { optional: true }
        )
    ]),
    // Left to Right
    transition('41 => 4, 41 => 51, 412 => 411, 51 => 5', [
        query(':enter',
            [
                style({
                    transform: 'translateX20px)',
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
                animate('.1s', style({
                    transform: 'translateX(20px)',
                    opacity: 0
                }))
            ],
            { optional: true }
        ),
        query(':enter',
            [
                style({
                    transform: 'translateX(-20px)',
                    opacity: 0
                }),
                animate('.1s', style({
                    transform: 'translateX(0px)',
                    opacity: 1
                }))
            ],
            { optional: true }
        )
    ]),
    // Bottom to Top
    transition(':increment', [
        query(':enter',
            [
                style({
                    transform: 'translateY(20px)',
                    opacity: 0
                })
            ],
            { optional: true }
        ),
        query(':leave',
            [
                style({
                    transform: 'translateY(0px)',
                    opacity: 1
                }),
                animate('.1s', style({
                    transform: 'translateY(-20px)',
                    opacity: 0
                }))
            ],
            { optional: true }
        ),
        query(':enter',
            [
                style({
                    transform: 'translateY(20px)',
                    opacity: 0
                }),
                animate('.1s', style({
                    transform: 'translateY(0px)',
                    opacity: 1
                }))
            ],
            { optional: true }
        )
    ]),
    // Top to Bottom
    transition(':decrement', [
        query(':enter',
            [
                style({
                    transform: 'translateY(-20px)',
                    opacity: 0
                })
            ],
            { optional: true }
        ),
        query(':leave',
            [
                style({
                    transform: 'translateY(0px)',
                    opacity: 1
                }),
                animate('.1s', style({
                    transform: 'translateY(20px)',
                    opacity: 0
                }))
            ],
            { optional: true }
        ),
        query(':enter',
            [
                style({
                    transform: 'translateY(-20px)',
                    opacity: 0
                }),
                animate('.1s', style({
                    transform: 'translateY(0px)',
                    opacity: 1
                }))
            ],
            { optional: true }
        )
    ])
])
