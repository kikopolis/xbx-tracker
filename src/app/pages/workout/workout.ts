import { Component, OnInit } from '@angular/core';
import { Workout as WorkoutInterface }           from 'src/app/contracts/workout/workout';
import { FiveBX }            from '../../service/exercise-regime/FiveBX';
import { TenBX }             from '../../service/exercise-regime/TenBX';

@Component(
    {
        selector   : 'workout',
        templateUrl: './workout.html',
        styleUrls  : ['./workout.scss'],
    },
)
export class Workout implements OnInit {
    private list: WorkoutInterface[] | [] = [];
    private workout: WorkoutInterface | null = null;
    
    public getList(): WorkoutInterface[] | [] {
        return this.list;
    }
    
    public setList(value: WorkoutInterface[] | []) {
        this.list = value;
    }
    
    public setExercise(exercise: WorkoutInterface) {
        this.workout = exercise;
    }
    
    public getExercise(): WorkoutInterface | null {
        return this.workout;
    }
    
    public ngOnInit(): void {
        const all = [
            new FiveBX(),
            new TenBX(),
        ];
        this.setList(all);
    }
}