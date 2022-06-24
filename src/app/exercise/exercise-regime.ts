import { Schedule }     from './schedule';
import { ExerciseList } from './exercise-list';

export interface ExerciseRegime {
    getId: () => string;
    setId: (id: string) => void;
    getTitle: () => string;
    setTitle: (title: string) => void;
    getSchedule: () => Schedule;
    setSchedule: (schedule: Schedule) => void;
    getExerciseList: () => ExerciseList;
    setExerciseList: (list: ExerciseList) => void;
}