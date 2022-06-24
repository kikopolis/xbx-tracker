import { Schedule }         from './schedule';
import { WorkoutExercises } from './workout-exercises';

export interface Workout {
    getId: () => string;
    setId: (id: string) => void;
    getTitle: () => string;
    setTitle: (title: string) => void;
    getSchedule: () => Schedule;
    setSchedule: (schedule: Schedule) => void;
    getExerciseList: () => WorkoutExercises;
    setExerciseList: (list: WorkoutExercises) => void;
}