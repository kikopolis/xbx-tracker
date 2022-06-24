import { TestBed }      from '@angular/core/testing';
import { Workout }      from './workout';
import { HeadingOne }   from '../../layout/components/headings/heading-one/heading-one';
import { By }           from '@angular/platform-browser';

describe('Workout', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule(
            {
                declarations: [
                    Workout,
                    HeadingOne
                ],
            }).compileComponents();
    });
    
    it('should create the workout component', function () {
        const fixture = TestBed.createComponent(Workout);
        const workout = fixture.componentInstance;
        expect(workout).toBeTruthy();
    });
    
    it('should have the page title "Workout"', function () {
        const fixture = TestBed.createComponent(Workout);
        const headingOne = fixture.debugElement.query(By.directive(HeadingOne)) as any;
        headingOne.text = 'Workout';
        fixture.detectChanges();
        const workout = fixture.nativeElement as HTMLElement;
        expect(workout.querySelector('h1')?.textContent).toContain('Workout');
    });
});