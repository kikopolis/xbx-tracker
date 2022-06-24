import { Injectable }      from '@angular/core';
import { ExerciseRegime }  from '../../exercise/exercise-regime';
import { Schedule }        from '../../exercise/schedule';
import { ExerciseList }    from '../../exercise/exercise-list';
import { GenericList }     from './exercise-list/GenericList';
import { GenericSchedule } from './schedule/GenericSchedule';

@Injectable(
    {
        providedIn: 'root',
    },
)

export class FiveBX implements ExerciseRegime {
    private id: string;
    private title: string;
    private list: ExerciseList;
    private schedule: Schedule;
    
    constructor() {
        this.id = 'five-bx-temp-id';
        this.title = 'FiveBX';
        this.list = new GenericList('five-bx-temp-exercise-list-id', []);
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
    
    public getExerciseList(): ExerciseList {
        return this.list;
    }
    
    public setExerciseList(list: ExerciseList): void {
        this.list = list;
    }
    
    public getSchedule(): Schedule {
        return this.schedule;
    }
    
    public setSchedule(schedule: Schedule): void {
        this.schedule = schedule;
    }
}