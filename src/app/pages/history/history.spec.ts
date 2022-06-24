import { TestBed } from '@angular/core/testing';
import { History } from './history';

describe('History', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [History] }).compileComponents();
    });
    
    it('should create the history page', function () {
        const fixture = TestBed.createComponent(History);
        const history = fixture.componentInstance;
        expect(history).toBeTruthy();
    });
    
    it('should contain h1 with history title', function () {
        const fixture = TestBed.createComponent(History);
        const history = fixture.nativeElement as HTMLElement;
        expect(history.querySelector('h1')?.textContent).toContain('History');
    });
});