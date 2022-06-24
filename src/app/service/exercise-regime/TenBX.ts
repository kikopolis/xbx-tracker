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
    private id: string;
    private title: string;
    private list: WorkoutExercises;
    private schedule: Schedule;
    
    constructor() {
        this.id = 'ten-bx-temp-id';
        this.title = 'TenBX';
        this.list = new GenericList('ten-bx-temp-contracts-list-id', []);
        this.schedule = new GenericSchedule('every-day-temp-schedule', 'Once per day');
    }
    
    public getId(): string {
        return this.id;
    }
    
    public setId(id: string): void {
        this.id = id;
    }
    
    public getTitle(): string {
        return this.title;
    }
    
    public setTitle(title: string): void {
        this.title = title;
    }
    
    public getExerciseList(): WorkoutExercises {
        return this.list;
    }
    
    public setExerciseList(list: WorkoutExercises): void {
        this.list = list;
    }
    
    public getSchedule(): Schedule {
        return this.schedule;
    }
    
    public setSchedule(schedule: Schedule): void {
        this.schedule = schedule;
    }
}