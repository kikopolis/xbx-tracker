import { TestBed } from '@angular/core/testing';
import { Header }  from './header';

describe('Header', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [Header] }).compileComponents();
    });
    
    it('should create the header component', function () {
        const fixture = TestBed.createComponent(Header);
        const header = fixture.componentInstance;
        expect(header).toBeTruthy();
    });
    
    it('should contain the navbar title', function () {
        const fixture = TestBed.createComponent(Header);
        const header = fixture.nativeElement as HTMLElement;
        expect(header.querySelector('.navbar .navbar-brand')?.textContent).toContain('The X BX Tracker');
    });
    
    it('should contain navigation links', function () {
        const fixture = TestBed.createComponent(Header);
        const header = fixture.nativeElement as HTMLElement;
        expect(header.querySelector('.navbar .navbar-nav')?.textContent).toContain('Dashboard');
        expect(header.querySelector('.navbar .navbar-nav')?.textContent).toContain('Workout');
        expect(header.querySelector('.navbar .navbar-nav')?.textContent).toContain('History');
    });
});