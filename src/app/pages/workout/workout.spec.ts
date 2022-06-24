import { TestBed } from '@angular/core/testing';
import { Workout } from './workout';

describe('Workout', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [Workout] }).compileComponents();
    });
    
    it('should create the workout component', function () {
        const fixture = TestBed.createComponent(Workout);
        const workout = fixture.componentInstance;
        expect(workout).toBeTruthy();
    });
    
    it('should have the page title "Workout"', function () {
        const fixture = TestBed.createComponent(Workout);
        const workout = fixture.nativeElement as HTMLElement;
        expect(workout.querySelector('h1')?.textContent).toContain('Workout');
    });
});