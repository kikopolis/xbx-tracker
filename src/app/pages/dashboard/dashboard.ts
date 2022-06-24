import { Component } from '@angular/core';
import { FiveBX }    from '../../service/FiveBX';
import { TenBX }     from '../../service/TenBX';

@Component(
    {
        selector   : 'app-dashboard',
        templateUrl: './dashboard.html',
        styleUrls  : ['./dashboard.scss'],
    },
)
export class Dashboard {
    constructor(
        private fiveBX: FiveBX,
        private tenBX: TenBX,
    ) {
    }
}