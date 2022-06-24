import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root',
    },
)

export class FiveBX {
    constructor() {
        console.log('five bx loaded');
    }
}