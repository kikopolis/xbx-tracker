import { Component }      from '@angular/core';
import { ExerciseRegime } from 'src/app/exercise/exercise-regime';

@Component(
    {
        selector   : 'workout',
        templateUrl: './workout.html',
        styleUrls  : ['./workout.scss'],
    },
)
export class Workout {
    private exercise: ExerciseRegime | null = null;
    
    public setExercise(exercise: ExerciseRegime) {
        this.exercise = exercise;
    }
    
    public getExercise(): ExerciseRegime | null {
        return this.exercise;
    }
}