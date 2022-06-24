import { Schedule }         from './schedule';
import { WorkoutExercises } from './workout-exercises';

export interface Workout {
    id: string;
    title: string;
    schedule: Schedule;
    list: WorkoutExercises;
}