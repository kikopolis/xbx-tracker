import { Component, Input } from '@angular/core';

@Component(
    {
        selector   : 'heading-one',
        templateUrl: './heading-one.html',
    },
)

export class HeadingOne {
    @Input() public text: string = '';
}