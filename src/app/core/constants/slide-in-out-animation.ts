import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'opacity': '1', 'display': 'block'
        })),
        state('out', style({
            'opacity': '0', 'display': 'none'
        })),
        transition('in => out', [group([            
            animate('0ms ease-in-out', style({
                'display': 'none'
            })),
            animate('0ms ease-in-out', style({
                'opacity': '0'
            }))
        ])]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'display': 'block'
            })),
            animate('1500ms ease-in-out', style({
                'opacity': '1'
            }))
        ])])
    ]),
]
