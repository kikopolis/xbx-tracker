import { TestBed }    from '@angular/core/testing';
import { Dashboard }  from './dashboard';
import { HeadingOne } from '../../layout/components/headings/heading-one/heading-one';
import { By }         from '@angular/platform-browser';

describe('Dashboard', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [Dashboard, HeadingOne] }).compileComponents();
    });
    
    it('should create the dashboard component', function () {
        const fixture = TestBed.createComponent(Dashboard);
        const dashboard = fixture.componentInstance;
        expect(dashboard).toBeTruthy();
    });
    
    it('should contain h1 with page title', function () {
        const fixture = TestBed.createComponent(Dashboard);
        const headingOne = fixture.debugElement.query(By.directive(HeadingOne)) as any;
        headingOne.text = 'Dashboard';
        fixture.detectChanges();
        const dashboard = fixture.nativeElement as HTMLElement;
        expect(dashboard.querySelector('h1')?.textContent).toContain('Dashboard');
    });
});