import { TestBed }    from '@angular/core/testing';
import { HeadingOne } from './heading-one';

describe('Heading', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({ declarations: [HeadingOne] }).compileComponents();
    });
    
    it('should create the heading component', function () {
        const text = 'Welcome Tester!';
        const fixture = TestBed.createComponent(HeadingOne);
        const heading = fixture.componentInstance;
        expect(heading).toBeTruthy();
    });
});