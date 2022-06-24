import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)

export class TenBX{
    constructor() {
        console.log('ten bx loaded');
    }
}