import { Exercise } from './exercise';

export interface WorkoutExercises {
    id: string;
    list: Exercise[] | [];
}