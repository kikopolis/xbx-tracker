import { WorkoutExercises } from '../../../contracts/workout/workout-exercises';
import { Exercise }         from '../../../contracts/workout/exercise';

export class GenericList implements WorkoutExercises {
    constructor(public id: string, public list: Exercise[] | []) {
    }
}