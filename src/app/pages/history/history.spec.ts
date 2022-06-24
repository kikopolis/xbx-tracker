import { TestBed }    from '@angular/core/testing';
import { History }    from './history';
import { By }         from '@angular/platform-browser';
import { HeadingOne } from '../../layout/components/headings/heading-one/heading-one';

describe('History', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [History, HeadingOne] }).compileComponents();
    });
    
    it('should create the history page', function () {
        const fixture = TestBed.createComponent(History);
        const history = fixture.componentInstance;
        expect(history).toBeTruthy();
    });
    
    it('should contain h1 with history title', function () {
        const fixture = TestBed.createComponent(History);
        const headingOne = fixture.debugElement.query(By.directive(HeadingOne)) as any;
        headingOne.text = 'History';
        fixture.detectChanges();
        const history = fixture.nativeElement as HTMLElement;
        expect(history.querySelector('h1')?.textContent).toContain('History');
    });
});