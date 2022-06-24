import { Component, OnInit }           from '@angular/core';
import { Workout as WorkoutInterface } from 'src/app/contracts/workout/workout';
import { FiveBX }                      from '../../service/exercise-regime/FiveBX';
import { TenBX }                       from '../../service/exercise-regime/TenBX';

@Component(
    {
        selector   : 'workout',
        templateUrl: './workout.html',
        styleUrls  : ['./workout.scss'],
    },
)
export class Workout implements OnInit {
    public list: WorkoutInterface[] | [] = [];
    public workoutId: string = '';
    private workout: WorkoutInterface | undefined;
    
    public ngOnInit(): void {
        this.list = [
            new FiveBX(),
            new TenBX(),
        ];
    }
    
    public getWorkout(): WorkoutInterface | null {
        if (this.workout) {
            return this.workout;
        }
        for (const workout of this.list) {
            if (workout.id === this.workoutId) {
                return workout;
            }
        }
        return null;
    }
}