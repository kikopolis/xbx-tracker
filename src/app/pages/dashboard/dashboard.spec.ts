import { TestBed }   from '@angular/core/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [Dashboard] }).compileComponents();
    });
    
    it('should create the dashboard component', function () {
        const fixture = TestBed.createComponent(Dashboard);
        const dashboard = fixture.componentInstance;
        expect(dashboard).toBeTruthy();
    });
    
    it('should contain h1 with page title', function () {
        const fixture = TestBed.createComponent(Dashboard);
        const dashboard = fixture.nativeElement as HTMLElement;
        expect(dashboard.querySelector('h1')?.textContent).toContain('Dashboard');
    });
});