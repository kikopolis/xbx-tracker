import { Injectable } from '@angular/core';
import { Workout }    from '../../contracts/workout/workout';
import { Schedule }         from '../../contracts/workout/schedule';
import { WorkoutExercises } from '../../contracts/workout/workout-exercises';
import { GenericList }      from './exercise-list/GenericList';
import { GenericSchedule } from './schedule/GenericSchedule';

@Injectable(
    {
        providedIn: 'root',
    },
)

export class FiveBX implements Workout {
    public id: string;
    public title: string;
    public exercises: WorkoutExercises;
    public schedule: Schedule;
    
    constructor() {
        this.id = 'five-bx-temp-id';
        this.title = 'FiveBX';
        this.exercises = new GenericList('five-bx-temp-contracts-list-id', []);
        this.schedule = new GenericSchedule('every-day-temp-schedule', 'Once per day');
    }
}