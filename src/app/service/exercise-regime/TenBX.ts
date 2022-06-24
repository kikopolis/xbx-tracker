import { Injectable }        from '@angular/core';
import { Workout }          from '../../contracts/workout/workout';
import { WorkoutExercises } from '../../contracts/workout/workout-exercises';
import { Schedule }         from '../../contracts/workout/schedule';
import { GenericList }    from './exercise-list/GenericList';
import { GenericSchedule } from './schedule/GenericSchedule';

@Injectable(
    {
        providedIn: 'root',
    },
)

export class TenBX implements Workout {
    public id: string;
    public title: string;
    public exercises: WorkoutExercises;
    public schedule: Schedule;
    
    constructor() {
        this.id = 'ten-bx-temp-id';
        this.title = 'TenBX';
        this.exercises = new GenericList('ten-bx-temp-contracts-list-id', []);
        this.schedule = new GenericSchedule('every-day-temp-schedule', 'Once per day');
    }
}